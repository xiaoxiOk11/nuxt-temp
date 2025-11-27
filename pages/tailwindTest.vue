<template>
    <div class="text-slate-900">
        <div class="mb-5 ">
            <USelectMenu v-model="value" :items="selectList" class="w-48" />
        </div>
     
        <div class="mt-5">
            <UFormField label="Email" error="Please enter a valid email address.">
                <UInput placeholder="Enter your email" class="w-full" />
            </UFormField>
            <div class="text-cyan-900 mt-10">
                {{ masjVal }}
            </div>
            <div class="flex items-center gap-2">
                <UInput v-model="masjVal" v-maska="'##/##'" placeholder="4242 4242 4242 4242"
                    icon="i-lucide-credit-card" />
            </div>
        </div>
        <UCarousel v-slot="{ item }" :items="bannerList" class="w-full max-w-xs mx-auto">
            <img :src="item" width="320" height="320" class="rounded-lg">
        </UCarousel>
        <div>div with tailwindcss styles</div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Tailwind Button
        </button>
        <UButton>UI Button</UButton>
        <UIcon name="i-lucide-lightbulb" class="size-5" />
        <div class="my-10">
            <UAlert title="Heads up! " />

        </div>
        <div class="grid grid-cols-4 gap-4 gap-10">
            <div class="bg-cyan-800 text-lg text-amber-200 p-2 ">01</div>
            <div>02</div>

            <div class="font-bold text-lg">03</div>
            <div class="touch-pan-x">04</div>

            <!-- ... -->
            <div class="cursor-pointer">09</div>
        </div>
        <div class="my-5">
            <figure class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
            </figure>
        </div>
        <UAvatarGroup class="mt-10">
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
import { vMaska } from 'maska/vue'
import type { SelectMenuItem } from '@nuxt/ui'
const masjVal = ref("")
const maskOptions = {
    mask: '#### #### #### ####',
    eager: true  // 输入时立即格式化
}
const value = ref({
    label: 'Todo'
})
const selectList = ref([
    {
        label: 'Backlog'
    },
    {
        label: 'Todo'
    },
    {
        label: 'In Progress'
    },
    {
        label: 'Done'
    }
])

const bannerList = [
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