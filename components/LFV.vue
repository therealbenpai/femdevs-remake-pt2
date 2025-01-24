<script setup lang="ts">
const props = defineProps<{
    val: string;
    description: string;
}>();
</script>

<template>
    <div class="flex flex-col items-center space-y-2">
        <h2 class="elect-none font-poppins text-3xl font-bold text-neutral-900">{{ props.val }}</h2>
        <p class="select-none font-poppins text-xl text-neutral-700">{{ props.description }}</p>
    </div>
</template>
