export default defineEventHandler(async (event) => {
    const session = await requireUserSession(event);
    if (!session) {
        throw createError({
            status: 401,
            statusMessage: 'Unauthorized',
        });
    }
    return session;
});