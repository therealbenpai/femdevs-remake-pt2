import SpotifyWebApi from "spotify-web-api-node";

export default defineEventHandler(async (event) => {
    const RTC = useRuntimeConfig();
    const query = getQuery(event);
    const { code } = query;
    const SpotifyAPI = new SpotifyWebApi({
        clientId: RTC.spotify.clientId,
        clientSecret: RTC.spotify.clientSecret,
        redirectUri: RTC.spotify.redirectUri
    });
    if (!code) {
        const scopes = ["user-read-private", "user-read-currently-playing", "user-read-playback-state", "user-read-email"];
        return await sendRedirect(event, SpotifyAPI.createAuthorizeURL(scopes, ''), 301)
    }
    if (typeof code !== 'string') {
        throw createError({
            statusCode: 400,
            statusMessage: ""
        })
    }
    const { body } = await SpotifyAPI.authorizationCodeGrant(code);
    return body
});