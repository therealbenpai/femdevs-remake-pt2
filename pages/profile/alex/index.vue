<script setup lang="ts">
useHead({
    title: 'About Me'
})

useSeoMeta({
    description: 'A little bit about me.',
    ogTitle: 'About Me',
    ogDescription: 'A little bit about me.',
    ogUrl: 'https://benshawmean.com/',
    ogImage: 'https://cdn.benshawmean.com/meta-banner.png',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    ogSiteName: "Benpai's Website",
    twitterCard: 'summary_large_image',
    twitterTitle: 'About Me',
    twitterDescription: 'A little bit about me.',
    twitterImage: 'https://cdn.benshawmean.com/meta-banner.png',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@therealbenpai',
    twitterCreator: '@therealbenpai'
})

definePageMeta({
    layout: 'custom-alex'
})

interface Section {
    title: string
    content: string
}

const sections: Section[] = [
    {
        title: 'About Me',
        content:
            "Hai, I'm Alex! (She/They), an exceptionally silly 17 year old :3"
    },
    {
        title: 'FemDevs',
        content:
            "As a co-owner of The FemDevs, I'm committed to helping everyone thrive in the coding world, regardless of gender. We also strive to make new and unique projects for people worldwide."
    },
    {
        title: 'Language Proficiency',
        content:
            "I'm fluent in both English and Arabic, and I'm all for learning new languages. I've found a passion for translation as a member of the Pronouns.Page team, where we're dedicated to making the Arab world more inclusive and open."
    },
    {
        title: 'General Interests',
        content:
            "I have loved cooking since I was child, and I like learning new recipes all the time. And while I might not be great at it, I play video games, when I have some extra free time. I also enjoy playing badminton, and hanging out with close friends, even though I'm socially anxious."
    }
]
</script>

<template>
    <div class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
        <div
            v-for="section in sections"
            :key="section.title"
        >
            <h2 class="text-2xl font-semibold">{{ section.title }}</h2>
            <p class="text-lg">{{ section.content }}</p>
        </div>
    </div>
</template>
