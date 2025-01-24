export default defineEventHandler(async (event) => {
    const color = getRouterParam(event, 'color');
    return event.$fetch(`/logos/${color}.svg`);
})
