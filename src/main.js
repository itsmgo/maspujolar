import { createApp } from "vue";
import { createVfm } from "vue-final-modal";
import { router } from "./router";
import App from "./App.vue";
import "./assets/main.css";
import "vue-final-modal/style.css";

const vfm = createVfm();

createApp(App).use(router).use(vfm).mount("#app");
