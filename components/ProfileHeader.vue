<script setup lang="ts">
const props = defineProps<{
    title: string;
}>();
</script>

<template>
    <div>
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">{{ props.title }}</h2>
        <slot></slot>
    </div>
</template>
