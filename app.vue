<script setup lang="ts">
const {localeProperties} = useI18n();
const {dir} = localeProperties.value;
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
[dir="rtl"] .icon {
  transform: scaleX(-1);
}
</style>