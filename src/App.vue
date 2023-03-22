<script setup>
import { ModalsContainer } from "vue-final-modal";
import { useRouter } from "vue-router";
import MainHeader from "./components/MainHeader.vue";
import TheMenu from "./components/TheMenu.vue";
import { onMounted, reactive, ref } from "vue";

const top = ref(null);
const menu = ref(null);
const scrollable = ref(null);

const router = useRouter();

const data = reactive({
  scroll: Number,
});

const methods = {
  onScroll: () => {
    data.scroll = scrollable.value.scrollTop;
  },
  goToHome: () => {
    router.push("/");
    methods.scrollToTop();
  },
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

const compute = reactive({
  getOpacityStyle: () => {
    const maxScroll = 427;
    const minScroll = 300;
    const opacity =
      (Math.min(Math.max(minScroll, data.scroll), maxScroll) - minScroll) /
      (maxScroll - minScroll);
    if (opacity == 0) {
      return { display: "none" };
    }
    return {
      opacity: opacity,
    };
  },
});

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
      <div class="logo-content">
        <h1
          class="logo"
          :style="compute.getOpacityStyle()"
          @click="methods.goToHome()"
        >
          Mas Pujolar
        </h1>
      </div>
      <div class="main-content">
        <TheMenu
          :scroll-value="data.scroll"
          @scroll-top="methods.scrollToTop()"
          @scroll-menu="methods.scrollToMenu()"
        />
        <router-view />
      </div>
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
  padding-bottom: 5rem;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 960px 1fr;
}

.logo-content {
  position: sticky;
  top: 0;
  height: 0;
  margin: 0 auto;
}

.logo {
  color: var(--color-text);
  top: 35px;
  z-index: 2;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0;
  font-weight: 700;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
  margin: auto;
}
</style>
