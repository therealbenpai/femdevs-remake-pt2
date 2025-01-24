<script setup lang="ts">
const props = defineProps<{
    ver: string;
    supported: boolean;
    type: number;
}>();
const ftype = ['>', '>=', '<', '<=', '^', '~'][props.type] || '';
const fsupported = props.supported ? '✅' : '❌';
</script>

<template>
    <tr>
        <td class="select-none font-poppins text-lg text-neutral-900">{{ ftype }}{{ props.ver }}</td>
        <td class="select-none font-poppins text-lg text-neutral-900">{{ fsupported }}</td>
    </tr>
</template>
