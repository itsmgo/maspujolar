<script setup></script>

<template>
  <div class="container">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias ipsum
      cum fuga recusandae repellat quam ipsam cumque molestias aliquid deleniti
      hic, inventore ut assumenda, obcaecati velit natus mollitia sapiente.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias ipsum
      cum fuga recusandae repellat quam ipsam cumque molestias aliquid deleniti
      hic, inventore ut assumenda, obcaecati velit natus mollitia.
    </p>
    <h2>Formulari de contacte</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias ipsum
      cum fuga recusandae repellat quam ipsam cumque molestias aliquid deleniti
      hic, inventore ut assumenda, obcaecati velit natus mollitia sapiente?
    </p>
    <div class="form">
      <div class="input">
        Nom
        <div class="inputbox" />
      </div>
      <div class="input">
        Correu
        <div class="inputbox" />
      </div>
      <div class="input">
        Telefon
        <div class="inputbox" />
      </div>
      <div class="input">
        Missatge
        <div class="inputbox" style="height: 15rem" />
      </div>
    </div>
    <button>Enviar</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.inputbox {
  height: 2.5rem;
  background-color: lightgray;
  border-radius: 0.3rem;
}

button {
  border: 1px solid lightgray;
  background-color: transparent;
  font-size: 1rem;
  font-family: "Montserrat";
  cursor: pointer;
  padding: 1rem;
  width: 10rem;
  border-radius: 0.3rem;
  align-self: self-end;
}

button:hover {
  font-weight: 600;
  border: 1px solid gray;
}
</style>
