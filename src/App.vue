<script setup>
import { ModalsContainer } from "vue-final-modal";
import MainHeader from "./components/MainHeader.vue";
import TheMenu from "./components/TheMenu.vue";
import { ref } from "vue";
const top = ref(null);
const menu = ref(null);

const methods = {
  scrollToTop: () => {
    setTimeout(function () {
      top.value.scrollIntoView({ behavior: "smooth" });
    }, 1);
  },
  scrollToMenu: () => {
    setTimeout(function () {
      menu.value.scrollIntoView({ behavior: "smooth" });
    }, 1);
  },
};
</script>

<template>
  <header ref="top">
    <MainHeader />
  </header>
  <main ref="menu">
    <TheMenu
      @scroll-top="methods.scrollToTop()"
      @scroll-menu="methods.scrollToMenu()"
    />
    <router-view />
  </main>
  <ModalsContainer />
</template>

<style scoped>
header {
  line-height: 1.5;
  width: 100%;
}

main {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 50%;
  margin: auto;
  margin-bottom: 5rem;
}
</style>
