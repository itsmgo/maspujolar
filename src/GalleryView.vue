<script setup>
import { reactive, ref } from "vue";
import GalleryModal from "./components/GalleryModal.vue";

const sections = [
  {
    name: "Exteriors",
    images: ["a", "b", "c", "d"],
  },
  {
    name: "Arees comunes",
    images: ["a", "b", "c", "d", "aa", "bb", "cc", "dd"],
  },
  {
    name: "Habitacions",
    images: ["a", "b", "c", "d", "aa", "bb", "cc", "dd"],
  },
];
const show = ref(false);
const data = reactive({
  selected: "asdf",
});

const methods = {
  enlargeImage: (image) => {
    data.selected = image;
    show.value = true;
  },
};
</script>

<template>
  <div class="container">
    <div v-for="section in sections" :key="section.name" class="section">
      <h2>{{ section.name }}</h2>
      <div class="images">
        <div
          v-for="image in section.images"
          :key="image"
          class="image"
          @click="methods.enlargeImage(image)"
        />
      </div>
    </div>
  </div>
  <GalleryModal v-model="show" :source="data.selected" />
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.images {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  width: 100%;
}

.image {
  background-color: lightgray;
  border-radius: 0.6rem;
  transition: all 0.1s;
  width: 100%;
  height: 15rem;
  cursor: pointer;
}
.image:hover {
  border-radius: 1.5rem;
}
</style>
