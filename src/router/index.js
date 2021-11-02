import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/cesium",
    name: "cesium",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/cesium/index.vue"),
  },
  {
    path: "/echarts",
    name: "echarts",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/echarts/index.vue"),
  },
  {
    path: "/geography",
    name: "geography",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/geography/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
