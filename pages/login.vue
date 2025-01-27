<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema = z.object({
    email: z
        .string()
        .email('Invalid email')
        .min(6, 'Must be at least 6 characters')
        .max(64, 'Must be at most 64 characters'),
    password: z
        .string()
        .min(8, 'Must be at least 8 characters')
        .max(32, 'Must be at most 32 characters')
})

const state = reactive({
    email: undefined,
    password: undefined
})

async function onSubmit(event: FormSubmitEvent<z.output<typeof schema>>) {
    event.preventDefault()
    try {
        const res = await fetch('/auth/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-method': 'login',
            },
            body: JSON.stringify(state)
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data)
        } else {
            console.error(res.statusText)
        }
    } catch (error) {
        console.error(error)
    }
}
</script>

<template>
    <div class="flex flex-col items-center justify-center max-w-3xl place-self-center my-10">
        <div
            class="flex border border-neutral-200 rounded-md shadow-md p-32 w-full bg-slate-300"
        >
            <UForm
                :schema="schema"
                :state="state"
                class="space-y-4"
                @submit="onSubmit"
            >
                <UFormGroup label="Email" name="email">
                    <UInput v-model="state.email" type="email"/>
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                    <UInput v-model="state.password" type="password" />
                </UFormGroup>

                <UButton type="submit"> Submit </UButton>
            </UForm>
        </div>
    </div>
</template>
