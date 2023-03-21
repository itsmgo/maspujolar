<script setup>
const props = defineProps(["title", "image", "text"]);
</script>

<template>
  <div class="activity">
    <h2>{{ props.title }}</h2>
    <div class="image" />
    <p>{{ props.text }}</p>
  </div>
</template>

<style scoped>
.activity {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.image {
  background-color: lightgray;
  border-radius: 8px;
  width: 100%;
  height: 15rem;
}
</style>
