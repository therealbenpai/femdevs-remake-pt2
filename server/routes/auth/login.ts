import z from 'zod';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { email, password } = schema.parse(body);
    if (email === 'test@example.com' && password === 'password') {
        await setUserSession(event, {
            user: {
                userid: email,
            },
            secure: {
                password,
            },
        });
        return {
            message: 'Logged in successfully'
        }
    }
    throw createError({
        statusCode: 401,
        statusMessage: 'Invalid email or password'
    })
})