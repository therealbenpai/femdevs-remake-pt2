<script setup lang="ts">
const props = defineProps<{
    main: string;
    sub?: string;
}>();
</script>

<template>
    <div>
        <h2 class="select-none font-poppins text-3xl font-medium text-neutral-900">{{ props.main }}</h2>
        <p v-if="props.sub" class="select-none font-poppins text-xl text-neutral-700">{{ props.sub }}</p>
    </div>
</template>
