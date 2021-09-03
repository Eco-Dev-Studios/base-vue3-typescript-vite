<template>
  <div class="container">
    <div class="layout">This a template</div>
  </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

const { x, y } = useWindowScroll();
</script>

<style></style>
