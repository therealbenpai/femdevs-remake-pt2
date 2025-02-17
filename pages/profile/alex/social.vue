<script setup lang="ts">
useHead({
    title: 'Socials',
});

useSeoMeta({
    description: 'A list of all of my social media accounts!',
    ogTitle: 'Socials',
    ogDescription: 'A list of all of my social media accounts!',
    ogUrl: 'https://thefemdevs/profile/alex/social',
    ogImage: 'https://cdn.benshawmean.com/Alexs_Profile.png',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    ogSiteName: "Alex's Profile",
    twitterCard: 'summary_large_image',
    twitterTitle: 'Socials',
    twitterDescription: 'A list of all of my social media accounts!',
    twitterImage: 'https://cdn.benshawmean.com/Alexs_Profile.png',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@auxiliaryfrfr',
    twitterCreator: '@auxiliaryfrfr'
});

definePageMeta({
    layout: 'custom-alex',
})

interface SocialMediaAccount {
    username: string;
    identifier: string;
    link: string;
    platform: string;
    icon: string;
}

const socialMediaAccounts: SocialMediaAccount[] = [
{
        link: 'https://discord.com/users/1112774630416076850',
        icon: 'fa6-brands:discord',
        platform: 'Discord',
        username: 'auxiliaryfrfr',
        identifier: '1112774630416076850',
    },
    {
        link: 'https://www.instagram.com/auxiliaryfrfr/',
        icon: 'fa6-brands:instagram',
        platform: 'Instagram',
        username: 'auxiliaryfrfr',
        identifier: 'auxiliaryfrfr',
    },
    {
        link: 'https://github.com/auxiliaryfrfr',
        icon: 'fa6-brands:github',
        platform: 'GitHub',
        username: 'auxiliaryfrfr',
        identifier: 'auxiliaryfrfr',
    },
    {
        link: 'https://open.spotify.com/user/31a3c3jitxf3fde24p5ohiqfrmnm',
        icon: 'fa6-brands:spotify',
        platform: 'Spotify',
        username: 'auxiliaryfrfr',
        identifier: '31a3c3jitxf3fde24p5ohiqfrmnm',
    },
    {
        link: 'https://twitter.com/auxiliaryfrfr',
        icon: 'fa6-brands:twitter',
        platform: 'X (formerly Twitter)',
        username: 'auxiliaryfrfr',
        identifier: 'auxiliaryfrfr',
    },
    {
        link: 'https://en.pronouns.page/@auxiliaryfrfr',
        icon: 'simple-icons:pronounsdotpage',
        platform: 'Pronouns.Page',
        username: 'auxiliaryfrfr',
        identifier: 'auxiliaryfrfr',
    },
    {
        link: 'https://www.youtube.com/channel/UCfK45ILqng9SMe7EcCzd57g',
        icon: 'fa6-brands:youtube',
        platform: 'YouTube',
        username: 'auxiliaryfrfr',
        identifier: 'UCfK45ILqng9SMe7EcCzd57g',
    },
    {
        link: 'https://www.snapchat.com/add/auxiliaryfrfr',
        icon: 'fa6-brands:snapchat',
        platform: 'Snapchat',
        username: 'auxiliaryfrfr',
        identifier: 'auxiliaryfrfr',
    },
    {
        link: 'https://www.last.fm/user/auxiliaryfrfr',
        icon: 'fa6-brands:lastfm',
        platform: 'LastFM',
        username: 'auxiliaryfrfr',
        identifier: 'auxiliaryfrfr',
    },
    {
        link: 'https://www.linkedin.com/in/alex-auxiliary-061367338/',
        icon: 'fa6-brands:linkedin',
        platform: 'LinkedIn',
        username: 'auxiliaryfrfr',
        identifier: 'auxiliaryfrfr',
    },
    {
        link: 'https://www.twitch.tv/auxiliaryfrfr',
        icon: 'fa6-brands:twitch',
        platform: 'Twitch',
        username: 'auxiliaryfrfr',
        identifier: 'auxiliaryfrfr',
    },
    {
        link: 'https://bsky.app/profile/auxiliaryfrfr.bsky.social',
        icon: 'fa6-brands:bluesky',
        platform: 'Bluesky',
        username: 'auxiliaryfrfr',
        identifier: 'auxiliaryfrfr.bsky.social',
    },
    {
        link: 'https://steamcommunity.com/id/auxiliaryfrfr',
        icon: 'fa6-brands:steam',
        platform: 'Steam',
        username: 'auxiliaryfrfr',
        identifier: 'auxiliaryfrfr',
    },
    {
        link: 'mailto:auxiliaryfrfr@gmail.com',
        icon: 'fa6-solid:envelope',
        platform: 'Email',
        username: 'auxiliaryfrfr',
        identifier: 'auxiliaryfrfr@gmail.com',
    }
];
</script>

<template>
    <div class="flex flex-col mt-8 p-4 gap-4 overflow-auto">
        <h1 class="text-4xl font-bold">Social Accounts</h1>
        <p class="text-lg">You can find me on the following platforms:</p>
        <div class="grid grid-col-1 gap-4">
            <div
                v-for="account in socialMediaAccounts"
                :key="account.platform"
                class="bg-[#21252b] p-4 rounded-2xl border-2 border-transparent hover:bg-[#282C34] hover:border-slate-400"
            >
                <a :href="account.link">
                    <div class="flex flex-col gap-2">
                        <div class="flex flex-row gap-6">
                            <h2 class="text-2xl font-semibold">
                                {{ account.platform }}
                            </h2>
                            <Icon :name="account.icon" size="24px" />
                        </div>
                        <p class="text-lg">{{ account.username }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
