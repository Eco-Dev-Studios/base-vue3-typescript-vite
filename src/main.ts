import "vue-global-api";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";
// windicss layers
import "virtual:windi.css";
import "virtual:windi-devtools";

// custom css
import "../src/assets/index.css";

createApp(App).use(router).use(createPinia()).use(createHead()).mount("#app");
