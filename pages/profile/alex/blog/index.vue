<script setup lang="ts">
useHead({
    title: 'Blog Posts',
});

useSeoMeta({
    description: 'Blog posts by Alex.',
    ogTitle: 'Blog Posts',
    ogDescription: 'Blog posts by Alex.',
    ogUrl: 'https://thefemdevs/profile/alex/blog',
    ogImage: 'https://cdn.benshawmean.com/Alexs_Profile.png',
    ogImageAlt: 'Profile Picture',
    ogType: 'website',
    ogSiteName: "Alex's Profile",
    twitterCard: 'summary_large_image',
    twitterTitle: 'Blog Posts',
    twitterDescription: 'Blog posts by Alex.',
    twitterImage: 'https://cdn.benshawmean.com/Alexs_Profile.png',
    twitterImageAlt: 'Profile Picture',
    twitterSite: '@auxiliaryfrfr',
    twitterCreator: '@auxiliaryfrfr',
});

const { data: posts } = await useAsyncData(`blog-posts`, () =>
    queryCollection('blog').where('author', '=', 'alex').all()
);
definePageMeta({
    layout: 'custom-alex',
})
</script>

<template>
    <div class="flex flex-col mt-8 p-4 gap-4 overflow-y-auto">
        <h1 class="text-4xl font-bold">Blog Posts</h1>
        <p class="text-lg">
            Here are some of my blog posts. I write about a variety of topics,
            so feel free to check them out!
        </p>
        <div class="grid grid-cols-1 gap-4 overflow-y-auto">
            <div v-for="post in posts" :key="post.id">
                <div
                    v-if="!post.draft"
                    class="bg-[#21252b] p-4 rounded-2xl border-2 border-transparent hover:bg-[#282C34] hover:border-slate-400"
                >
                    <a :href="'/profile/alex' + post.path">
                        <div class="flex flex-col gap-2">
                            <img
                                :src="post.image"
                                alt="Post Image"
                                class="rounded-lg h-24 w-max object-cover"
                                v-if="post.image"
                            />
                            <h2 class="text-2xl font-semibold">
                                {{ post.title }}
                                <span class="ml-2 text-sm text-slate-400">{{
                                    formatDate(new Date(post.date))
                                }}</span>
                            </h2>
                            <p class="text-lg">
                                {{ post.description }}
                            </p>
                            <div v-if="post.tags" class="flex flex-row gap-2">
                                <div
                                    v-for="tag in post.tags"
                                    :key="tag"
                                    class="bg-slate-400 text-white px-2 py-1 rounded-lg"
                                >
                                    {{ tag }}
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
