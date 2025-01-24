<script setup lang="ts">
const { t } = useI18n();
const uptimeData = await $fetch("/api/uptime") as { agrStatus: number };
const States = [
    ["bg-green-500", t("status.type.up")],
    ["bg-red-500", t("status.type.down")],
    ["bg-yellow-500", t("status.type.degraded")],
    ["bg-blue-500", t("status.type.maintenance")],
];
const msg = States[uptimeData.agrStatus - 1];
const base = `flex rounded-full min-h-3 max-h-3 min-w-3 max-w-3 ${msg[0]}`;
const title = `${t("status.prefix")}${msg[1]}`;
</script>

<template>
    <span class="relative" :class="base" :title="title">
        <span class="absolute animate-ping" :class="base"></span>
    </span>
</template>