<script setup>
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { routes } from "./../router";

const router = useRouter();
const route = useRoute();

const emits = defineEmits(["scroll-menu"]);

const methods = {
  changeTab: (name) => {
    router.push({ name: name });
    emits("scroll-menu");
  },
};

const compute = reactive({
  isActive: (name) => {
    return route.name == name;
  },

  getClass: (name) => {
    return { active: compute.isActive(name) };
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
  </div>
</template>

<style scoped>
.container {
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
</style>
