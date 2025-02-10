<template>
    <div class="flex flex-col items-center justify-center">
        <div class="flex w-full max-w-6xl flex-row items-center justify-between p-8 md:my-16">
            <div class="flex w-full flex-col space-y-4">
                <img class="w-full rounded-xl object-cover transition-all"
                    src="https://thefemdevs.com/logos/default.svg" alt="FemDevs Logo" async />
                <h1 class="select-none font-poppins text-5xl font-medium text-neutral-900">{{
                    $t('about.title')
                }}</h1>
                <h2 class="select-none font-poppins text-3xl font-medium text-neutral-900">{{
                    $t('about.sections.one.title')
                }}</h2>
                <p class="select-none font-poppins text-xl text-neutral-900">{{
                    $t('about.sections.one.desc')
                }}</p>
                <h2 class="select-none font-poppins text-3xl font-medium text-neutral-900">{{
                    $t('about.sections.two.title')
                }}</h2>
                <p class="select-none font-poppins text-xl text-neutral-900">{{
                    $t('about.sections.two.desc')
                }}</p>
                <h2 class="select-none font-poppins text-3xl font-medium text-neutral-900">{{
                    $t('about.sections.three.title')
                }}</h2>
                <p class="select-none font-poppins text-xl text-neutral-900">{{
                    $t('about.sections.three.desc')
                }}</p>
                <h2 class="select-none font-poppins text-3xl font-medium text-neutral-900">{{
                    $t('about.sections.four.title')
                }}</h2>
                <p class="select-none font-poppins text-xl text-neutral-900">{{
                    $t('about.sections.four.desc')
                }}</p>
                <h2 class="select-none font-poppins text-3xl font-medium text-neutral-900">{{
                    $t('about.sections.five.title')
                }}</h2>
                <p class="select-none font-poppins text-xl text-neutral-900">{{
                    $t('about.sections.five.desc')
                }}</p>
            </div>
        </div>
    </div>
</template>