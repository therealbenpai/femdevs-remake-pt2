<script setup lang="ts">
defineProps({
    href: {
        type: String,
        required: true,
    },
    extraAttributes: {
        type: Object,
        default: {},
    },
});
</script>

<template>
    <div>
        <h2 class="select-none font-poppins text-lg text-neutral-100 transition-all hover:text-neutral-300" :href="href"
            {...extraAttributes}>
            <slot></slot>
        </h2>
    </div>
</template>