<script setup>
import { ModalsContainer } from "vue-final-modal";
import MainHeader from "./components/MainHeader.vue";
import TheMenu from "./components/TheMenu.vue";
import { onMounted, reactive, ref } from "vue";

const top = ref(null);
const menu = ref(null);
const scrollable = ref(null);

const data = reactive({
  scroll: Number,
});

const methods = {
  scrollToTop: () => {
    setTimeout(function () {
      top.value.scrollIntoView({ behavior: "smooth" });
    }, 1);
  },
  onScroll: () => {
    data.scroll = scrollable.value.scrollTop;
  },
  scrollToMenu: () => {
    setTimeout(function () {
      menu.value.scrollIntoView({ behavior: "smooth" });
    }, 1);
  },
};

onMounted(() => {
  scrollable.value.addEventListener("scroll", methods.onScroll);
});
</script>

<template>
  <div class="content" ref="scrollable">
    <header ref="top">
      <MainHeader />
    </header>
    <main ref="menu">
      <TheMenu
        :scroll-value="data.scroll"
        @scroll-top="methods.scrollToTop()"
        @scroll-menu="methods.scrollToMenu()"
      />
      <router-view />
      <ModalsContainer />
    </main>
  </div>
</template>

<style scoped>
.content {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y proximity;
}

header {
  scroll-snap-align: start;
  line-height: 1.5;
  width: 100%;
}

main {
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 50%;
  margin: auto;
  padding-bottom: 5rem;
}
</style>
