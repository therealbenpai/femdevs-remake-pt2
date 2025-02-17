<script setup lang="ts">
useHead({
    title: 'Projects',
});

useSeoMeta({
    description: 'A list of all of my projects!',
    ogTitle: 'Projects',
    ogDescription: 'A list of all of my projects!',
    ogUrl: 'https://thefemdevs.com/profile/alex/projects',
    ogImage: 'https://cdn.benshawmean.com/Alexs_Profile.png',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    ogSiteName: "Alex's Profile",
    twitterCard: 'summary_large_image',
    twitterTitle: 'Projects',
    twitterDescription: 'A list of all of my projects!',
    twitterImage: 'https://cdn.benshawmean.com/Alexs_Profile.png',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@auxiliaryfrfr',
    twitterCreator: '@auxiliaryfrfr'
});

definePageMeta({
    layout: 'custom-alex',
})

type ProjectStatus = 'in progress' | 'beta' | 'released' | 'archived' | 'dropped';

interface Project {
    name: string;
    description: string;
    link: string;
    public: boolean;
    status: ProjectStatus;
}
const projects: Project[] = [
    {
        name: 'Fembot',
        description:
            'A Discord bot that is used in the FemDevs Discord server. It is built with Discord.js and TypeScript.',
        link: 'https://github.com/femdevs/fembot',
        public: true,
        status: 'released',
    },
    {
        name: 'BananaBot',
        description:
            'A private Discord bot. It is built with Discord.py.',
        link: 'https://github.com/femdevs/bananabot',
        public: false,
        status: 'released',
    },
    {
        name: 'Sanrio Bot',
        description:
            'A Discord bot that is used in the Sanrio Discord server. It is built with Discord.js.',
        link: 'https://github.com/femdevs/Sanrio-Bot',
        public: false,
        status: 'archived',
    },
    {
        name: 'BSH Bot',
        description:
            'A Discord bot that was used in the Brian\'s House Discord server. It is built with Discord.js.',
        link: 'https://github.com/femdevs/BSH-Bot-v2',
        public: true,
        status: 'archived',
    },
    {
        name: 'Poland Destruction Simulator',
        description:
            'A funny simple webgame made to test click-rate.',
        link: 'https://github.com/femdevs/Poland-Destruction-Simulator',
        public: true,
        status: 'archived',
    },
    {
        name: 'Wave',
        description:
            'A social media website.',
        link: 'https://github.com/femdevs/wave',
        public: false,
        status: 'dropped',
    },
    {
        name: 'Arabic Pronouns.Page',
        description:
            `I've helped with translations in an effort to increase visibility and understanding of gender and sexuality inclusivity within Arabic-speaking communities.`,
        link: 'https://ar.pronouns.page',
        public: true,
        status: 'released',
    },
];
</script>

<template>
    <div class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
        <h1 class="text-4xl font-bold">Projects</h1>
        <p class="text-lg">
            Here is a list of all of my projects. You can find more information
            about each project by clicking on the project name.
        </p>
        <div class="grid grid-cols-1 gap-4">
            <div
                v-for="project in projects"
                :key="project.name"
                class="bg-[#21252b] p-4 rounded-2xl border-2 border-transparent hover:bg-[#282C34] hover:border-slate-400"
            >
                <a :href="project.link">
                    <div class="flex flex-col gap-2">
                        <h2 class="text-2xl font-semibold">
                            {{ project.name }}
                        </h2>
                        <p class="text-lg">{{ project.description }}</p>
                        <div class="flex flex-row gap-4 my-2">
                            <span
                                :class="{
                                    'bg-green-500': project.public,
                                    'bg-red-500': !project.public,
                                }"
                                class="text-md px-4 py-1 rounded-2xl"
                            >
                                <Icon
                                    :name="(() => {
                                        switch (project.public) {
                                            case true:
                                                return 'material-symbols:book-outline';
                                            case false:
                                                return 'material-symbols:lock-outline';
                                        }
                                    })()"
                                    size="16px"
                                    class="translate-y-0.5"
                                />
                                {{
                                    project.public
                                        ? 'open source'
                                        : 'closed source'
                                }}
                            </span>
                            <span
                                :class="{
                                    'bg-green-500':
                                        project.status === 'released',
                                    'bg-yellow-500': project.status === 'beta',
                                    'bg-orange-500':
                                        project.status === 'in progress',
                                    'bg-red-500': project.status === 'archived',
                                    'bg-gray-500': project.status === 'dropped',
                                }"
                                class="text-md px-4 py-1 rounded-2xl"
                                >
                                    <Icon
                                        :name="(() => {
                                            switch (project.status) {
                                                case 'in progress':
                                                    return 'heroicons-solid:clock';
                                                case 'beta':
                                                    return 'heroicons-solid:sparkles';
                                                case 'released':
                                                    return 'heroicons-solid:check-circle';
                                                case 'archived':
                                                    return 'heroicons-solid:archive';
                                                case 'dropped':
                                                    return 'heroicons-solid:x-circle';
                                            }
                                        })()"
                                        size="16px"
                                        class="translate-y-0.5"
                                    />
                                {{ project.status }}
                                </span
                            >
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
