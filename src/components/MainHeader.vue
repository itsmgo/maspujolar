<script setup></script>

<template>
  <div class="container">
    <video autoplay muted loop class="video">
      <source src="@/assets/drone.mp4" type="video/mp4" />
    </video>
    <div class="title">
      <h1 class="name">Mas Pujolar</h1>
      <h3 class="quote">Casa de colònies al cor del Montseny.</h3>
    </div>
  </div>
</template>

<style scoped>
.video {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

.title {
  height: 80vh;
  padding: 0 15rem;
  display: flex;
  flex-direction: column;
  color: var(--vt-c-text-dark-1);
  justify-content: center;
}
.quote {
  font-family: "Raleway", serif;
}

.name {
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 3rem;
  text-transform: uppercase;
  word-spacing: 0.7rem;
}

h3 {
  font-size: 1.3rem;
}
</style>
