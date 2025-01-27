import z from 'zod';
import { Supabase } from '~/shared';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { email, password } = schema.parse(body);
    const method = getHeader(event, 'x-method');
    if (method === 'login') {
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
    } else if (method === 'register') {
        const phash = await hashPassword(password);
        const { data, error } = await Supabase
            .from('users')
            .select('*')
            .eq('email', email)
        if (error) {
            throw createError({
                status: 500,
                statusMessage: 'Internal Server Error',
            })
        }
        if (data) {
            throw createError({
                status: 409,
                statusMessage: 'Conflict',
            })
        }
        const { data: insertData, error: insertError } = await Supabase
            .from('users')
            .insert({ email, password: phash })
        if (insertError) {
            throw createError({
                status: 500,
                statusMessage: 'Internal Server Error',
            })
        }
        return insertData;
    } else if (method === 'logout') {
        await clearUserSession(event);
        return {
            message: 'Logged out successfully'
        }
    }
})