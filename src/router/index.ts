// vite-env.d.ts
/// <reference types="vite-plugin-pages/client" />
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages"; // Routes generated automatically, system similar to nuxtjs

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

//Examples

// import type { RouteRecordRaw } from "vue-router";

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes: basicRoutes as RouteRecordRaw[],
// });
