<script setup lang="ts">
const {localeProperties, defaultLocale, locale} = useI18n();

defineProps({
    href: {
        type: String,
        required: true
    },
    extraAttributes: {
        type: Object,
        default: {}
    }
})

const parseLink = (link: string) => {
    if (localeProperties.value.code === defaultLocale) {
        return link
    }
    return `/${locale.value}${link}`
}
</script>

<template>
    <div>
        <a
            :href="parseLink(href)"
            class="select-none font-poppins text-lg text-neutral-100 transition-all hover:text-neutral-300"
        >
            <slot></slot>
        </a>
    </div>
</template>
