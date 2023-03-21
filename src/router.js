import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./HomeView.vue";
import GalleryView from "./GalleryView.vue";
import ActivitiesView from "./ActivitiesView.vue";
import ContactView from "./ContactView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
    name: "home",
  },
  {
    path: "/casa",
    component: HomeView,
    name: "casa",
    text: "La casa",
  },
  {
    path: "/galeria",
    component: GalleryView,
    name: "galeria",
    text: "Galeria",
  },
  {
    path: "/activitats",
    component: ActivitiesView,
    name: "activitats",
    text: "Activitats",
  },
  {
    path: "/contacte",
    component: ContactView,
    name: "contacte",
    text: "Contacte",
  },
];

const router = createRouter({ history: createWebHistory(), routes: routes });

export { router, routes };
