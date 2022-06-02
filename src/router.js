import VueRouter from "vue-router";
import { Home, Detail, Main } from "@/pages";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/detail",
    component: Detail,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
