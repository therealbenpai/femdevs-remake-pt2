<script setup lang="ts">
interface Link {
    name: string
    url: string
    icon: string
}

const links: Link[] = [
    {
        name: 'Home',
        url: '/profile/alex/',
        icon: 'mdi:home'
    },
    {
        name: 'Blog',
        url: '/profile/alex/blog',
        icon: 'mdi:fountain-pen-tip'
    },
    {
        name: 'Projects',
        url: '/profile/alex/projects',
        icon: 'mdi:code'
    },
    {
        name: 'Social Media',
        url: '/profile/alex/social',
        icon: 'mdi:internet'
    },
    {
        name: 'Contact',
        url: '/profile/alex/contact',
        icon: 'mdi:email'
    }
]

const isMobile = ref(false)

onMounted(() => {
    isMobile.value = window.innerWidth <= 768
    window.addEventListener('resize', () => {
        isMobile.value = window.innerWidth <= 768
    })
})
</script>

<template>
    <div
        class="text-white hidden md:flex flex-row px-32 py-16 p-4 gap-2 bg-background h-screen font-rubik absolute top-0"
    >
        <div class="flex w-full md:w-1/2 flex-col p-4 gap-6">
            <img
                src="https://thefemdevs.com/assets/images/grav/ad7cc897aef0988a7f7039f16417008b"
                alt="Profile Picture"
                class="size-36 md:size-48 rounded-2xl"
            />
            <div class="flex flex-col gap-2">
                <h2 class="text-3xl font-bold">
                    Alex
                    <span class="text-gray-400 text-sm">(she/her)</span>
                </h2>
                <h3 class="text-lg text-gray-400">Full Stack Developer</h3>
            </div>
            <p class="text-lg">
                I am a <span class="text-blue-500">web developer</span> with a
                passion for creating beautiful and functional websites using
                technologies like <span class="text-[#f06529]">HTML</span>,
                <span class="text-[#639]">CSS</span>,
                <span class="text-[#f3db4c]">JavaScript</span>,
                <span class="text-[#41b883]">Vue</span>,
                <span class="text-[#007ACC]">React</span>, and
                <span class="text-[#393]">Node.js</span>.
            </p>
        </div>
        <div class="flex flex-col gap-2 w-1/2 pl-12">
            <nav
                class="flex flex-row bg-navbar rounded-2xl space-x-6 px-6 w-full justify-evenly py-4"
            >
                <a
                    v-for="link in links"
                    :key="link.name"
                    :href="link.url"
                    class="text-lg font-semibold text-white"
                >
                    <span class="flex flex-col place-items-center gap-1">
                        <Icon :name="link.icon" size="24px" v-if="isMobile" />
                        <span class="hidden md:inline">{{ link.name }}</span>
                    </span>
                </a>
            </nav>
            <slot />
        </div>
    </div>
    <div
        class="text-white md:hidden flex flex-col md:flex-row px-8 md:px-32 py-4 md:py-16 gap-2 bg-background font-rubik absolute top-0"
    >
        <nav
            class="flex flex-row bg-navbar rounded-2xl space-x-6 px-6 w-full justify-evenly py-4"
        >
            <a
                v-for="link in links"
                :key="link.name"
                :href="link.url"
                class="text-lg font-semibold text-white"
            >
                <span class="flex flex-col place-items-center gap-1">
                    <Icon :name="link.icon" size="24px" v-if="isMobile" />
                    <span class="hidden md:inline">{{ link.name }}</span>
                </span>
            </a>
        </nav>
        <div class="flex w-full md:w-1/2 flex-col p-4 gap-6">
            <img
                src="https://thefemdevs.com/assets/images/grav/ad7cc897aef0988a7f7039f16417008b"
                alt="Profile Picture"
                class="size-36 md:size-48 rounded-2xl"
            />
            <div class="flex flex-col gap-2">
                <h2 class="text-3xl font-bold">
                    Alex
                    <span class="text-gray-400 text-sm">(she/her)</span>
                </h2>
                <h3 class="text-lg text-gray-400">Full Stack Developer</h3>
            </div>
            <p class="text-lg">
                I am a <span class="text-blue-500">web developer</span> with a
                passion for creating beautiful and functional websites using
                technologies like <span class="text-[#f06529]">HTML</span>,
                <span class="text-[#639]">CSS</span>,
                <span class="text-[#f3db4c]">JavaScript</span>,
                <span class="text-[#41b883]">Vue</span>,
                <span class="text-[#007ACC]">React</span>, and
                <span class="text-[#393]">Node.js</span>.
            </p>
        </div>
        <div class="flex flex-col gap-2 md:w-1/2 md:pl-12">
            <slot />
        </div>
    </div>
</template>
