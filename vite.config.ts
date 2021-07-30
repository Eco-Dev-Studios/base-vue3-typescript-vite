import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import Pages from "vite-plugin-pages";
import ViteComponents from "vite-plugin-components";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Pages(),
    ViteComponents(),
    VitePWA(),
    WindiCSS({
      transformCSS: "pre",
      preflight: true,
    }),
  ],
  build: {},
  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core"],
  },
});
