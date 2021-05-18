import Vue from "vue";
import VueRouter from "vue-router";

//防止router.push跳轉錯誤
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/",
    name: "index",
    component: () =>
      import("../views/index"),
  },
  {
    path: "/company",
    name: "company",
    component: () =>
      import("../views/company"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import("../views/contact"),
  },
  {
    path: "/service",
    name: "service",
    component: () =>
      import("../views/service"),
  },
  {
    path: "/specialize",
    name: "specialize",
    component: () =>
      import("../views/specialize"),
  },
  {
    path: "/project",
    name: "project",
    component: () =>
      import("../views/project"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
