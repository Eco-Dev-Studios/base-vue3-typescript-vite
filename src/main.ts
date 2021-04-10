import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import "virtual:windi.css";
import "virtual:windi-devtools";
import { registerSW } from "virtual:pwa-register";
import "../src/assets/index.css";

const updateSW = registerSW({
  onNeedRefresh() {
    // show a prompt to user
  },
  onOfflineReady() {
    // show a ready to work offline to user
  },
});

createApp(App).use(router).use(store).mount("#app");
