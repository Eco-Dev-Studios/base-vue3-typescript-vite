<template>
  <div class="h-auto w-full relative">
    <app-header />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head";
useHead({
  title: "Base Projecct",
  meta: [{ name: "description", content: "This is project base" }],
});
</script>

<style></style>
