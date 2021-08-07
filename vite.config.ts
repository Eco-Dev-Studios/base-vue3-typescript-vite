import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import Pages from "vite-plugin-pages";
import ViteComponents, { HeadlessUiResolver } from "vite-plugin-components";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Pages(),
    ViteComponents({
      directoryAsNamespace: true,
      customComponentResolvers: [HeadlessUiResolver()],
    }),
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
