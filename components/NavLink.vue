<script setup lang="ts">
const props = defineProps<{
    href: string;
    extraAttributes?: any;
}>();
</script>

<template>
    <a class="select-none font-poppins text-lg transition-all hover:text-neutral-800 text-slate-800" :href="props.href"
        {...props.extraAttributes}>
        <slot></slot>
    </a>
</template>