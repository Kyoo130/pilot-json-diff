import VueRouter from "vue-router";
import { Home, Diff } from "@/pages";

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/diff",
    component: Diff,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
