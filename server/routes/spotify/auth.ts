
import SpotifyWebApi from "spotify-web-api-node";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const { code } = query;
    const SpotifyAPI = new SpotifyWebApi({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        redirectUri: process.env.SPOTIFY_REDIRECT_URI,
    });
    if (!code) {
        const scopes = ["user-read-private", "user-read-currently-playing", "user-read-playback-state", "user-read-email"];
        const authorizeURL = SpotifyAPI.createAuthorizeURL(scopes, '');
        return await sendRedirect(event, authorizeURL, 302)
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