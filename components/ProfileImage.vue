<script setup lang="ts">
const props = defineProps<{
    link: string;
    name: string;
}>();
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <img
            :src="props.link"
            :alt="props.name"
            class='p-8 rounded-full w-1/2'
        />
    </div>
</template>
