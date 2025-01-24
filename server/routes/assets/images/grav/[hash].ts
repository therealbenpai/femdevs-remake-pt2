export default defineEventHandler(async (event) => {
    const hash = getRouterParam(event, 'hash');
    const url = new URL(`/avatar/${hash}`, 'https://www.gravatar.com');
    url.search = (new URLSearchParams([['size', '800'], ['d', 'mp'], ['r', 'x'], ['d', 'retro']])).toString();
    return event.$fetch(url.toString())
})