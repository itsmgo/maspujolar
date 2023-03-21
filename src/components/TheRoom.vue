<script setup>
const props = defineProps(["numero", "llits"]);
</script>

<template>
  <div class="room">
    <div class="icon" />
    <p>Habitació {{ props.numero }}</p>
    <p>{{ props.llits }} llits disponibles</p>
  </div>
</template>

<style scoped>
.room {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  padding: 1.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

.icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.4rem;
  background-color: #ccc;
  margin-bottom: 1rem;
}
</style>
