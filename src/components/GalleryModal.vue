<script setup>
import { VueFinalModal } from "vue-final-modal";

const props = defineProps(["source"]);
</script>

<template>
  <VueFinalModal
    class="modal"
    content-class="modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div class="modal-image">{{ props.source }}</div>
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
  flex-direction: column;
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
}
</style>
