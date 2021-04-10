import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    counter: 0,
    name: "Cess",
  }),
  getters: {
    doubleCount() {
      return this.counter * 2;
    },
    // use getters in other getters
    doubleCountPlusOne() {
      return this.doubleCount * 2 + 1;
    },
  },
  actions: {
    reset() {
      // `this` is the store instance
      this.counter = 0;
    },
  },
});
