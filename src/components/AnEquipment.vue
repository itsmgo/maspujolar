<script setup>
const props = defineProps(["text"]);
</script>

<template>
  <div class="container">
    <div class="icon" />
    <p>{{ props.text }}</p>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  height: 100%;
  padding: 1.5rem;
  line-height: 3rem;
  font-size: 1rem;
}

.icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.4rem;
  background-color: #ccc;
}
</style>
