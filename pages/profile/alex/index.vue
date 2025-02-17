<script setup lang="ts">
useHead({
    title: 'About Me'
})

useSeoMeta({
    description: 'Some info about me!',
    ogTitle: 'About Me',
    ogDescription: 'Some info about me!',
    ogUrl: 'https://thefemdevs.com/profile/alex',
    ogImage: 'https://cdn.benshawmean.com/Alexs_Profile.png',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    ogSiteName: "Alex's Profile",
    twitterCard: 'summary_large_image',
    twitterTitle: 'About Me',
    twitterDescription: 'Some info about me!',
    twitterImage: 'https://cdn.benshawmean.com/Alexs_Profile.png',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@auxiliaryfrfr',
    twitterCreator: '@auxiliaryfrfr'
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
            "Hai, I'm Alex! An exceptionally silly individual :3"
    },
    {
        title: 'FemDevs',
        content:
            "As a co-owner of FemDevs, I'm committed to helping everyone thrive in the coding world, regardless of gender or sexual orientation. We also strive to make new and unique projects for people worldwide."
    },
    {
        title: 'Language Proficiency',
        content:
            "I love learning about languages! Translation has become a big passion of mine, especially through my work with Pronouns.Page and other freelance projects."
    },
    {
        title: 'General Interests',
        content:
            "Cooking has been my thing since I was a kid, I’m always experimenting with new recipes. I also game when I get the chance (even if I suck at it), and I love playing badminton. :D"
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
