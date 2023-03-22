<script setup>
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { routes } from "./../router";

const router = useRouter();
const route = useRoute();

const props = defineProps(["scrollValue"]);

const emits = defineEmits(["scroll-top", "scroll-menu"]);

const methods = {
  changeTab: (name) => {
    router.push({ name: name });
    emits("scroll-menu");
  },
  goToHome: () => {
    router.push("/");
    emits("scroll-top");
  },
};

const compute = reactive({
  isActive: (name) => {
    return route.name == name;
  },

  getClass: (name) => {
    return { active: compute.isActive(name) };
  },
  getOpacityStyle: () => {
    const maxScroll = 427;
    const minScroll = 300;
    const opacity =
      (Math.min(Math.max(minScroll, props.scrollValue), maxScroll) -
        minScroll) /
      (maxScroll - minScroll);
    if (opacity == 0) {
      return { display: "none" };
    }
    return {
      opacity: opacity,
    };
  },
});
</script>

<template>
  <div class="container" ref="casa">
    <div class="buttons">
      <button
        v-for="button in routes.slice(1)"
        @click="methods.changeTab(button.name)"
        :class="compute.getClass(button.name)"
        :key="button.name"
      >
        {{ button.text }}
      </button>
    </div>
    <h1
      class="logo"
      :style="compute.getOpacityStyle()"
      @click="methods.goToHome()"
    >
      Mas Pujolar
    </h1>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  position: sticky;
  top: 0;
  z-index: 2;
}

.buttons {
  display: flex;
  justify-content: space-between;
  color: var(--vt-c-text-dark-1);
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  border-bottom: 1px solid #ccc;
  background-color: var(--color-background);
}

button {
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  font-family: "Montserrat";
  cursor: pointer;
  padding: 1rem;
  min-width: 10rem;
}

button:hover {
  font-weight: 600;
}

.active {
  font-weight: 500;
  text-decoration: underline;
}

.logo {
  color: var(--color-text);
  position: absolute;
  top: 35px;
  left: -360px;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0;
  font-weight: 700;
}
</style>
