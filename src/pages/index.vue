<script setup lang="ts">
const counter = ref(2);
const double = computed(() => counter.value * 2);
</script>

<template>
  <div class="container">
    <div class="layout">
      <button @click="counter++" class="btn">Increment</button>
      <h1 class="font-bold mt-4 text-center">{{ counter }}</h1>
      <h1 class="font-bold mt-4 text-center">{{ double }}</h1>
    </div>

    <!-- <button
      bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
      text="sm white"
      font="mono light"
      p="y-2 x-4"
      border="2 rounded blue-200"
    >
      Button
    </button> -->
  </div>
</template>
