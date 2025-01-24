<script setup lang="ts">
const props = defineProps<{
    section: string;
    impact: string;
    consequence: string;
}>();
</script>

<template>
    <div>
        <h3 class="select-none font-poppins text-2xl font-bold text-neutral-900">{{ props.section }}</h3>
        <p class="select-none font-poppins text-xl text-neutral-900">
            <div class="font-semibold underline">Impact: </div>
            {{ props.impact }}
        </p>
        <p class="select-none font-poppins text-xl text-neutral-900">
            <div class="font-semibold underline">Consequence: </div>
            {{ props.consequence }}
        </p>
    </div>
</template>
