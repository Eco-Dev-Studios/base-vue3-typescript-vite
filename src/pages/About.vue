<template>
  <div class="h-[1000px] w-full relative">
    <div class="text-center">
      <h1>About</h1>
    </div>
    <div class="relative h-screen w-full">
      <div class="absolute bottom-15 right-0 w-auto text-center font-bold">
        Scroll <br />
        X-{{ x }} | Y-{{ y }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

const { x, y } = useWindowScroll();
</script>

<style></style>
