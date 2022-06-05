import VueRouter from "vue-router";
import {Home, Diff, NotFound} from "@/pages";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/diff/:id",
    component: Diff,
  },
  {
    path: "*",
    component: NotFound
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
