<script setup lang="ts">
const props = defineProps<{
    href: string;
    extraAttributes?: any;
}>();
</script>

<template>
    <a class="select-none font-poppins text-lg transition-all hover:text-neutral-800 text-slate-800"
        {...props.extraAttributes}>
        <NuxtLinkLocale :to="props.href">
            <slot></slot>
        </NuxtLinkLocale>
    </a>
</template>