import VueRouter from "vue-router";
import { Home, Detail } from "@/pages";

const routes = [
  {
    path: "/",
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
