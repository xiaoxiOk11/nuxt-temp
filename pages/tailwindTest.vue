<template>
    <div>
        <UCarousel v-slot="{ item }" :items="items" class="w-full max-w-xs mx-auto">
            <img :src="item" width="320" height="320" class="rounded-lg">
        </UCarousel>
        <div>div with tailwindcss styles</div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Tailwind Button
        </button>
        <UButton>UI Button</UButton>
        <UIcon name="i-lucide-lightbulb" class="size-5" />
        <UAlert title="Heads up! pt-5" />
        <UAvatarGroup>
            <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
            <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
            <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
        </UAvatarGroup>

        <div class="mt10">
            <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                <UFormField label="Email" name="email">
                    <UInput v-model="state.email" size="xl" />
                </UFormField>

                <UFormField label="Password" name="password">
                    <UInput v-model="state.password" type="password" size="sm" />
                </UFormField>

                <UButton type="submit">
                    Submit
                </UButton>
            </UForm>
        </div>
    </div>
</template>



<script setup lang="ts">
const items = [
    'https://picsum.photos/640/640?random=1',
    'https://picsum.photos/640/640?random=2',
    'https://picsum.photos/640/640?random=3',
    'https://picsum.photos/640/640?random=4',
    'https://picsum.photos/640/640?random=5',
    'https://picsum.photos/640/640?random=6'
]

import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = v.object({
    email: v.pipe(v.string(), v.email('Invalid email')),
    password: v.pipe(v.string(), v.minLength(8, 'Must be at least 8 characters'))
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
    email: '',
    password: ''
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
    toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
    console.log(event.data)
}
</script>