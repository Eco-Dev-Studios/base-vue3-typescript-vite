<template>
  <div class="w-full h-screen relative">
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

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {},
});
</script>

<style></style>
