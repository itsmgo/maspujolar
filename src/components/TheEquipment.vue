<script setup>
import AnEquipment from "./AnEquipment.vue";
import TheRoom from "./TheRoom.vue";

const equipment = [
  "Aixo es una",
  "Llista de coses",
  "Que podria tenir la casa",
  "Una enumeracio",
  "De tots els equipaments",
  "De que disposa Mas Pujolar",
];

const rooms = [30, 25, 10, 40];
</script>

<template>
  <div class="equipment">
    <AnEquipment v-for="e in equipment" :text="e" :key="e" />
  </div>
  <div class="rooms">
    <TheRoom
      v-for="(room, index) in rooms"
      :numero="index + 1"
      :llits="room"
      :key="index"
    />
  </div>
</template>

<style scoped>
.equipment {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 3rem 0;
}

.rooms {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
</style>
