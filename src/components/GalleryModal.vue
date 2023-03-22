<script setup>
import { reactive } from "vue";
import { VueFinalModal } from "vue-final-modal";

const props = defineProps(["images", "selected"]);

const data = reactive({
  currentIndex: props.selected,
});

const methods = {
  changeImage: (direction) => {
    data.currentIndex = (data.currentIndex + direction) % props.images.length;
  },
};
</script>

<template>
  <VueFinalModal
    class="modal"
    content-class="modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    @before-open="data.currentIndex = props.selected"
  >
    <button
      class="modal-button"
      style="left: -70px"
      @click="methods.changeImage(-1)"
    >
      {{ "<" }}
    </button>
    <div class="modal-image">{{ props.images.at(data.currentIndex) }}</div>
    <button
      class="modal-button"
      style="right: -70px"
      @click="methods.changeImage(1)"
    >
      {{ ">" }}
    </button>
    <slot />
  </VueFinalModal>
</template>

<style>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  display: flex;
  position: relative;
  padding: 1rem;
  background: #fff;
  border-radius: 1rem;
}
.modal-content > * + * {
  margin: 0.5rem 0;
}
.modal-content h1 {
  font-size: 1.375rem;
}
.modal-content button {
  margin: 0.25rem 0 0 auto;
  padding: 0 8px;
  border: 1px solid;
  border-radius: 0.5rem;
}
.dark .modal-content {
  background: #000;
}

.modal-image {
  width: 70rem;
  height: 40rem;
  border-radius: 0.3rem;
  background-color: lightgray;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-button {
  position: absolute;
  top: 45%;
  border: none !important;
  background-color: var(--color-background);
  font-size: 1.2rem;
  font-family: "Montserrat";
  cursor: pointer;
  padding: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 2rem !important;
}

.modal-button:hover {
  font-weight: 600;
}
</style>
