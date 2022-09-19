import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
// import ProjecDetails from '../views/Project_Details.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/projects",
    name: "projects",
    // route level code-splitting which is lazy-loaded when the route is visited.
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/projects/:id",
    name: "details",
    component: () => import("../views/Project_Details.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
