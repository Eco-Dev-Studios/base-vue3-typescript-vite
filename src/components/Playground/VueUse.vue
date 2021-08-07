<template>
  <div class="min-h-screen py-10">
    <h1 class="font-bold text-left mb-2 w-full text-6xl text-gray-800">
      Vue Use
    </h1>
    <p class="font-medium mb-1 text-gray-800 text-opacity-70">
      Collection of essential Vue Composition Utilities
    </p>
    <a class="text-sm text-blue-700" href="https://vueuse.org/"
      >https://vueuse.org/</a
    >
    <div class="grid grid-cols-6">
      <div class="card">
        <small>
          <a href="https://vueuse.org/core/useWindowScroll/" target="_blank">
            useWindowScroll()
          </a>
        </small>
        <br />
        <span> <b>Scroll:</b> X: {{ x }} / Y: {{ y }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

const { x, y } = useWindowScroll();
</script>

<style scoped>
.card {
  @apply border rounded-md border-gray-800 border-opacity-30 mt-10 py-2 px-4;
}
</style>
