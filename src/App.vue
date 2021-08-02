<template>
  <div class="h-screen w-full relative">
    <div id="nav" class="mx-auto max-w-xl text-center">
      <router-link to="/" class="text-xl">Home</router-link>
      |
      <router-link to="/about" class="text-xl">About</router-link>
      |
      <router-link to="/playground" class="text-xl">Playground</router-link>
    </div>
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
