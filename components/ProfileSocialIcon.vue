<script setup lang="ts">
const props = defineProps<{
    link: string;
    pack: string;
    icon: string;
    title: string;
}>();

const className = 'hover:text-indigo-500 hover:scale-110 transition-all duration-300 p-0 border-1 border-solid border-transparent rounded-3xl no-underline items-center self-center justify-center flex flex-col pt-4 text-gray-700 text-5xl';
</script>

<template>
    <div class='justify-evenly size-full flex div-center p-2'>
        <a :href="props.link" target='_blank' :class="className" :title="props.title" rel='me'>
            <Icon :name="`${props.pack}:${props.icon}`" :class="className" />
        </a>
    </div>
</template>