<script setup lang="ts">
useHead({
    title: 'Contact',
});

useSeoMeta({
    description: 'You can contact me through the following methods!',
    ogTitle: 'Contact',
    ogDescription: 'You can contact me through the following methods!',
    ogUrl: 'https://thefemdevs.com/profile/alex/contact',
    ogImage: 'https://cdn.benshawmean.com/Alexs_Profile.png',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    ogSiteName: "Alex's Profile",
    twitterCard: 'summary_large_image',
    twitterTitle: 'Contact',
    twitterDescription: 'You can contact me through the following methods!',
    twitterImage: 'https://cdn.benshawmean.com/Alexs_Profile.png',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@auxiliaryfrfr',
    twitterCreator: '@auxiliaryfrfr'
});

definePageMeta({
    layout: 'custom-alex',
})

interface ContactMethod {
    name: string;
    identifier: string;
    link: string;
    icon: string;
}

const contactMethods: ContactMethod[] = [
    {
        name: 'Email',
        identifier: 'auxiliaryfrfr@gmail.com',
        link: 'mailto:auxiliaryfrfr@gmail.com',
        icon: 'fa-solid:envelope',
    },
    {
        name: 'Discord',
        identifier: '@auxiliaryfrfr',
        link: 'https://discord.com/users/1112774630416076850',
        icon: 'fa-brands:discord',
    },
];
</script>

<template>
    <div class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
        <h1 class="text-4xl font-bold">Contact</h1>
        <p class="text-lg">You can contact me through the following methods:</p>
        <div class="grid grid-col-1 gap-4">
            <div
                v-for="method in contactMethods"
                :key="method.name"
                class="bg-[#21252b] p-4 rounded-2xl border-2 border-transparent hover:bg-[#282C34] hover:border-slate-400"
            >
                <a :href="method.link">
                    <div class="flex flex-col gap-2">
                        <div class="flex flex-row gap-6">
                            <h2 class="text-2xl font-semibold">
                                {{ method.name }}
                            </h2>
                            <Icon :name="method.icon" size="24px" />
                        </div>
                        <p class="text-lg">{{ method.identifier }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
