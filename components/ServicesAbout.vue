<script setup lang="ts">
const props = defineProps<{
    title: string;
    description: string;
}>();
</script>

<template>
    <div>
        <h2 class="select-none font-poppins text-2xl font-medium text-neutral-900">{{ props.title }}</h2>
        <h3 class="select-none font-poppins text-lg text-neutral-700">{{ props.description }}</h3>
    </div>
</template>