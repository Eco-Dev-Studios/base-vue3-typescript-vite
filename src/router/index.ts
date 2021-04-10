import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import routes from "virtual:generated-pages"; // Routes generated automatically, system similar to nuxtjs

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

//Examples

// import type { RouteRecordRaw } from "vue-router";

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes: basicRoutes as RouteRecordRaw[],
// });
