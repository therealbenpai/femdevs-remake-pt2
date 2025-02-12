<script setup lang="ts">
const {localeProperties, defaultLocale, locale} = useI18n();
const props = defineProps<{
    href: string
    extraAttributes?: any
}>()

const parseLink = (link: string) => {
    if (localeProperties.value.code === defaultLocale) {
        return link
    }
    return `/${locale.value}${link}`
}
</script>

<template>
    <a
        noPrefetch
        :href="parseLink(props.href)"
        class="select-none font-poppins text-lg transition-all hover:text-neutral-800 text-slate-800"
    >
        <slot></slot>
    </a>
</template>
