<template>
  <div class="center-x-y flex flex-col ?">
    <div class="relative">
      <img src="../assets/img/img-1.jpg" alt="" />
      <div class="center-x-y w-20 backdrop-filter backdrop-blur-lg">Test</div>
    </div>
    <button @click="main.counter++" class="btn">Increment</button>
    <button
      bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
      text="sm white"
      font="mono light"
      p="y-2 x-4"
      border="2 rounded blue-200"
    >
      Button
    </button>
    <h1 class="text-center mt-4 font-bold">{{ main.counter }}</h1>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "vue";
import { useMainStore } from "../store/index";

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    val: 0,
  }),
  setup() {
    const main = useMainStore();

    return {
      main,
      state: computed(() => main.counter),
      doubleCount: computed(() => main.doubleCount),
    };
  },
});
</script>

<style scoped></style>
