<script setup lang="ts">
useHead({
    title: 'Home Page',
    meta: [
        {
            name: 'description',
            content: 'The FemDevs is a community'
        }
    ]
})
</script>

<template>
    <div class="flex flex-col items-center justify-center">
            <div>
                <div class="flex w-full max-w-6xl flex-row items-center justify-between p-8 md:my-16">
                    <div class="flex w-full flex-col space-y-8">
                        <div class="flex flex-col space-y-4">
                            <h1 class="select-none font-poppins text-5xl font-medium text-neutral-900">
                                {{ $t('home.headliner.title') }}
                            </h1>
                            <h3 class="select-none font-poppins text-xl text-neutral-900">
                                {{ $t('home.headliner.desc') }}
                            </h3>
                        </div>
                        <div class="flex w-full flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0">
                            <a
                                class="rounded-md border-2 border-brand-primary bg-neutral-50 px-8 py-2 text-center font-poppins text-lg text-brand-black transition-all hover:border-brand-primary-dark hover:bg-brand-primary-dark hover:text-neutral-50 hover:shadow-lg"
                                href="/products"
                            >
                                {{ $t('home.products.button') }}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex w-full justify-center bg-brand-primary">
                    <div class="w-full max-w-6xl space-y-4 p-8">
                        <div class="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:justify-between sm:space-x-4 sm:space-y-0">
                            <h2 class="max-w-2xl select-none font-poppins text-2xl font-medium text-white">
                                {{ $t('home.tagline') }}
                            </h2>
                            <a
                                class="w-full rounded-md bg-neutral-50 px-8 py-2 text-center font-poppins text-lg text-neutral-900 transition-all hover:bg-neutral-200 hover:shadow-lg sm:w-max"
                                href="mailto:support@thefemdevs.com"
                                target="_blank"
                            >
                                {{ $t('home.contact.button') }}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex w-full justify-center p-8 bg-white">
                    <div class="w-full max-w-6xl space-y-8 px-8">
                        <div class="flex flex-col items-start space-y-4">
                            <div class="flex flex-row items-center space-x-2">
                                <Icon
                                    name="ph:globe"
                                    class="size-[2rem]"
                                    style="color: #008"
                                />
                                <h3 class="max-w-2xl select-none font-poppins text-2xl font-medium text-neutral-900">
                                    {{ $t('home.info.one.title') }}
                                </h3>
                            </div>
                            <p class="max-w-2xl select-none font-poppins text-lg text-neutral-900">
                                {{ $t('home.info.one.desc') }}
                            </p>
                        </div>
                        <div class="flex flex-col items-start space-y-4 md:items-end">
                            <div class="flex flex-row items-center space-x-2">
                                <h3 class="max-w-2xl select-none font-poppins text-2xl font-medium text-neutral-900">
                                    {{ $t('home.info.two.title') }}
                                </h3>
                                <Icon
                                    name="solar:server-outline"
                                    class="size-[2rem]"
                                    style="color: #008"
                                />
                            </div>
                            <p class="max-w-2xl select-none font-poppins text-lg text-neutral-900 md:text-right">
                                {{ $t('home.info.two.desc') }}
                            </p>
                        </div>
                        <div class="flex flex-col items-start space-y-4">
                            <div class="flex flex-row items-center space-x-2">
                                <Icon
                                    name="mdi:message-question-outline"
                                    class="size-[2rem]"
                                    style="color: #008"
                                />
                                <h3 class="max-w-2xl select-none font-poppins text-2xl font-medium text-neutral-900">
                                    {{ $t('home.info.three.title') }}
                                </h3>
                            </div>
                            <p class="max-w-2xl select-none font-poppins text-lg text-neutral-900">
                                {{ $t('home.info.three.desc') }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex w-full max-w-6xl flex-row items-center p-8 md:my-16">
                    <div class="flex w-full flex-col space-y-8">
                        <div class="flex flex-col space-y-4">
                            <h2 class="max-w-2xl select-none font-poppins text-2xl font-medium text-neutral-900">
                                {{ $t('home.products.title') }}
                            </h2>
                        </div>
                        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
                            <div class="flex flex-col space-y-3 rounded-lg bg-white p-8">
                                <Icon
                                    name="carbon:api"
                                    class="size-[2rem]"
                                    style="color: #008"
                                />
                                <ServicesAbout
                                    :title="$t('home.products.api.title')"
                                    :description="$t('home.products.api.desc')"
                                />
                            </div>
                            <div class="flex flex-col space-y-3 rounded-lg bg-white p-8 lg:col-span-2">
                                <Icon
                                    name="gridicons:site"
                                    class="size-[2rem]"
                                    style="color: #008"
                                />
                                <ServicesAbout
                                    :title="$t('home.products.website.title')"
                                    :description="$t('home.products.website.desc')"
                                />
                            </div>
                            <div class="flex flex-col space-y-3 rounded-lg bg-white p-8 lg:col-span-2">
                                <Icon
                                    name="bxs:bot"
                                    class="size-[2rem]"
                                    style="color: #008"
                                />
                                <ServicesAbout
                                    :title="$t('home.products.bot.title')"
                                    :description="$t('home.products.bot.desc')"
                                />
                            </div>
                            <div class="flex flex-col space-y-3 rounded-lg bg-white p-8">
                                <Icon
                                    name="material-symbols-light:database"
                                    class="size-[2rem]"
                                    style="color: #008"
                                />
                                <ServicesAbout
                                    :title="$t('home.products.database.title')"
                                    :description="$t('home.products.database.desc')"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>