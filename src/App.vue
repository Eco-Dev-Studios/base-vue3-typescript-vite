<template>
  <div class="w-full h-screen relative">
    <router-view />
    <div id="nav">
      <HelloWorld />
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
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
