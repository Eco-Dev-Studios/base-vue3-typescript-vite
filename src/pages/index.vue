<template>
  <div class="center-x-y flex flex-col ?">
    <button @click="main.counter++">Increment</button>
    <h1 class="text-center mt-4">{{ main.counter }}</h1>
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
