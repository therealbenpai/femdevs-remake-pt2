<script setup lang="ts">
definePageMeta({
    layout: false
})

const profileClass =
[
    'hover:text-indigo-500',
    'hover:scale-110',
    'transition-all',
    'duration-300',
    'p-0',
    'border',
    'border-solid',
    'border-transparent',
    'no-underline',
    'items-center',
    'self-center',
    'justify-center',
    'flex',
    'flex-col',
    'pt-4',
    'text-gray-700',
    'text-5xl'
].join(' ');

interface SocialAccount {
    link: string
    icon: string
    title: string
}

const Socials: SocialAccount[] = [
    {
        link: 'https://discord.com/users/1112774630416076850',
        icon: 'fa6-brands:discord',
        title: 'Discord Profile'
    },
    {
        link: 'https://www.instagram.com/auxiliaryfrfr/',
        icon: 'fa6-brands:instagram',
        title: 'Instagram Profile'
    },
    {
        link: 'https://github.com/auxiliaryfrfr',
        icon: 'fa6-brands:github',
        title: 'GitHub Profile'
    },
    {
        link: 'https://open.spotify.com/user/31a3c3jitxf3fde24p5ohiqfrmnm',
        icon: 'fa6-brands:spotify',
        title: 'Spotify Profile'
    },
    {
        link: 'https://twitter.com/auxiliaryfrfr',
        icon: 'fa6-brands:twitter',
        title: 'X (formerly Twitter) Profile'
    },
    {
        link: 'https://thefemdevs.com',
        icon: 'fa6-solid:code',
        title: 'The FemDevs'
    },
    {
        link: 'https://en.pronouns.page/@auxiliaryfrfr',
        icon: 'simple-icons:pronounsdotpage',
        title: 'Pronouns.Page'
    },
    {
        link: 'https://www.youtube.com/channel/UCfK45ILqng9SMe7EcCzd57g',
        icon: 'fa6-brands:youtube',
        title: 'YouTube Profile'
    },
    {
        link: 'https://www.snapchat.com/add/auxiliaryfrfr',
        icon: 'fa6-brands:snapchat',
        title: 'Snapchat Profile'
    },
    {
        link: 'https://www.last.fm/user/auxiliaryfrfr',
        icon: 'fa6-brands:lastfm',
        title: 'LastFM Profile'
    },
    {
        link: 'mailto:auxiliaryfrfr@gmail.com',
        icon: 'fa6-solid:envelope',
        title: 'Email'
    }
]

interface Section {
    title: string
    description: string
}

const Sections: Section[] = [
    {
        title: 'About Me',
        description:
            "Hai, I'm Alex! (She/They), an exceptionally silly 17 year old :3"
    },
    {
        title: 'FemDevs',
        description:
            "As a co-owner of The FemDevs, I'm committed to helping everyone thrive in the coding world, regardless of gender. We also strive to make new and unique projects for people worldwide."
    },
    {
        title: 'Language Proficiency',
        description:
            "I'm fluent in both English and Arabic, and I'm all for learning new languages. I've found a passion for translation as a member of the Pronouns.Page team, where we're dedicated to making the Arab world more inclusive and open."
    },
    {
        title: 'General Interests',
        description:
            "I have loved cooking since I was child, and I like learning new recipes all the time. And while I might not be great at it, I play video games, when I have some extra free time. I also enjoy playing badminton, and hanging out with close friends, even though I'm socially anxious."
    }
]
</script>

<template>
    <div class="absolute top-0 left-0 w-screen bg-gray-100 font-sans leading-normal tracking-normal">
        <div class="container mx-auto my-10">
            <div
                class="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
            >
                <div class="p-6">
                    <ProfileImage
                        name="Alex"
                        link="https://thefemdevs.com/assets/images/grav/ad7cc897aef0988a7f7039f16417008b"
                    />
                    <h1 class="text-4xl font-black place-self-center mb-4 text-gray-800">
                        Alex
                    </h1>
                    <div v-for="section in Sections">
                        <ProfileHeader :title="section.title" />
                        <ProfileDescription>
                            {{ section.description }}
                        </ProfileDescription>
                    </div>
                    <Header title="Socials" />
                    <div
                        class="grid grid-cols-2 grid-rows-6 justify-evenly place-items-center md:grid-cols-6 md:grid-rows-2 sm:grid-cols-4 sm:grid-rows-3"
                    >
                        <div
                            class="justify-evenly size-full flex div-center p-2"
                            v-for="social in Socials"
                        >
                            <a
                                :href="social.link"
                                target="_blank"
                                :class="profileClass"
                                :title="social.title"
                                rel="me"
                            >
                                <Icon
                                    :name="social.icon"
                                    :class="profileClass"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
