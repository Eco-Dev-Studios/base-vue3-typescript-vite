<template>
  <div class="center-x-y ?">
    <h1>{{ msg }}</h1>
    <button
      class="font-bold text-xl px-4 py-1 rounded-md bg-gray-800 text-gray-50"
      @click="count++"
    >
      count is: {{ count }}
    </button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: (props) => {
    console.log(props);
    const count = ref(0);
    return { count };
  },
});
</script>

<style scoped></style>
