import * as Supabase from '@supabase/supabase-js';
import SpotifyWebAPI from 'spotify-web-api-node';

interface ArtistInfo {
    name: string;
    image: string;
    url: string;
}

interface SpotifyListening {
    isPlaying: boolean;
    playing: {
        track: {
            title: string;
            url: string | null;
        };
        album: {
            title: string;
            artists: ArtistInfo[];
            image: string | null;
        };
        artists: ArtistInfo[];
        meta: {
            progress: {
                start: number;
                end: number;
                current: number;
                percentage: number;
            };
        };
    };
}

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const RTC = useRuntimeConfig();
    const { name: user } = query;
    const SpotifyAPI = new SpotifyWebAPI({
        clientId: RTC.spotify.clientId,
        clientSecret: RTC.spotify.clientSecret,
        redirectUri: RTC.spotify.redirectUri,
    });
    const supabase = Supabase.createClient(
        RTC.supabase.url!,
        RTC.supabase.serviceKey!
    );
    const { data: userRows, error: userError } = await supabase.from('spotify').select('*');
    if (userError || !userRows) throw createError({
        status: 404,
        statusMessage: 'Not Found',
    })
    const spotifyUser = userRows.find(row => row.user === user);
    if (!spotifyUser) throw createError({
        status: 500,
        statusMessage: 'Internal Server Error',
    })
    const { access, refresh } = spotifyUser;
    SpotifyAPI.setAccessToken(access);
    SpotifyAPI.setRefreshToken(refresh);
    const { body: { access_token: newAccess, refresh_token: newRefresh } } = await SpotifyAPI.refreshAccessToken();
    SpotifyAPI.setAccessToken(newAccess);
    SpotifyAPI.setRefreshToken(newRefresh!);
    await supabase.from('spotify').update({ access: newAccess, refresh: newRefresh }).eq('user', user);
    const MainSpotifyRes = await SpotifyAPI.getMyCurrentPlaybackState({ market: 'US' })
        .catch(() => {});
    if (!MainSpotifyRes) return {
        isPlaying: false,
        playing: {
            track: {
                title: 'Nothing playing',
                url: null,
            },
            album: {
                title: 'Nothing playing',
                artists: [],
                image: null,
            },
            artists: [],
            meta: {
                progress: {
                    start: 0,
                    end: 0,
                    current: 0,
                    percentage: 0,
                },
            },
        },
    }
    const body = MainSpotifyRes.body as SpotifyApi.CurrentPlaybackResponse;
    if (!Object.hasOwn(body, 'item')) return {
            isPlaying: false,
            playing: {
                track: {
                    title: 'Nothing playing',
                    url: null,
                },
                album: {
                    title: 'Nothing playing',
                    artists: [],
                    image: null,
                },
                artists: [],
                meta: {
                    progress: {
                        start: 0,
                        end: 0,
                        current: 0,
                        percentage: 0,
                    },
                },
            },
    };
    const item = body?.item as SpotifyApi.TrackObjectFull;
    const { name, album, artists, external_urls: externalURLs } = item;
    const full: SpotifyListening = {
        isPlaying: body.is_playing,
        playing: {
            track: {
                title: name,
                url: externalURLs.spotify,
            },
            album: {
                title: album.name,
                artists: [],
                image: album.images.find((sDat: Record<string, any>) => sDat.width === 64e1)?.url || 'https://via.placeholder.com/64',
            },
            artists: [],
            meta: {
                progress: {
                    start: Date.now() - item.duration_ms,
                    end: Date.now() + (item.duration_ms - body.progress_ms!),
                    current: body.progress_ms!,
                    percentage: (body.progress_ms! / item!.duration_ms) * 1e2,
                },
            },
        },
    }
    const data = {
        track: {
            title: name,
            url: externalURLs.spotify,
        },
        album: {
            title: album.name,
            artists: [],
            image: album.images.find((sDat: Record<string, any>) => sDat.width === 64e1)?.url || 'https://via.placeholder.com/64',
        },
        artists: [],
        meta: {
            progress: {
                start: Date.now() - item.duration_ms,
                end: Date.now() + (item.duration_ms - body.progress_ms!),
                current: body.progress_ms,
                percentage: (body.progress_ms! / item!.duration_ms) * 1e2,
            },
        },
    };
    for (const artist of artists) {
        full.playing.artists.push(
            await SpotifyAPI.getArtist(artist.id)
                .then(
                    dat => ({
                        name: dat.body.name,
                        image: dat.body.images.find(({ width }) => width === 64e1)?.url || 'https://via.placeholder.com/64',
                        url: dat.body.external_urls.spotify,
                    }),
                    () => ({
                        name: artist.name,
                        image: 'https://via.placeholder.com/64',
                        url: 'https://open.spotify.com',
                    }),
                ),
        );
    }
    for (const albumArtist of album.artists) {
        full.playing.album.artists.push(
            await SpotifyAPI.getArtist(albumArtist.id)
                .then(
                    dat => ({
                        name: dat.body.name,
                        image: dat.body.images.find(({ width }) => width === 64e1)?.url || 'https://via.placeholder.com/64',
                        url: dat.body.external_urls.spotify,
                    }),
                    () => ({
                        name: albumArtist.name,
                        image: 'https://via.placeholder.com/64',
                        url: 'https://open.spotify.com',
                    }),
                ),
        );
    }
    return full;
});