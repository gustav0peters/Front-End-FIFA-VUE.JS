import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import Jogos from "../pages/Jogos.vue";
import Times from "../pages/Times.vue";
import Resultados from "../pages/Resultados.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/jogos",
    name: "Jogos",
    component: Jogos,
  },
  {
    path: "/times",
    name: "Times",
    component: Times,

  },
  {
    path: "/resultados",
    name: "Resultados",
    component: Resultados,

  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;