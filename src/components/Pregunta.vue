<template>
  <div class="container">
    <img v-if="imagen" :src="imagen" alt="No se pudo cargar" />
    <div class="container-2">
      <div class="pregunta-container">
        <input v-model="pregunta" placeholder="Hazme una pregunta" />
        <p>Recuerda terminar con un signo de pregunta (?)</p>

        <div v-if="esValida">
          <h2>{{ pregunta }}</h2>
          <h1>{{ respuesta }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { consultarRespuestaFachada } from "@/clients/YesNoClient.js";

export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      imagen: null,
      esValida: false,
    };
  },
  watch: {
    pregunta(value, oldValue) {
      this.esValida = false;
      if (value.includes("?")) {
        this.esValida = true;
        console.log("valor actual: " + value);
        console.log("valor anterior: " + oldValue);
        //Aqui deberia consultar el API
        this.consumirAPI();
      }
    },
  },
  methods: {
    async consumirAPI() {
      // método asincrono, tiempo de espera de respuesta
      this.respuesta = "Pensando...";
      const res = await consultarRespuestaFachada();
      console.log(res);
      console.log(res.image);
      console.log(res.answer);
      console.log(res.forced);
      this.respuesta = res.answer;
      this.imagen = res.image;
    },
  },
};
</script>

<style scoped>
.container-2,
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
}

.container-2 {
  background: rgba(0, 0, 0, 0.4);
}

.pregunta-container {
  /* check */
  position: relative;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 15px;
  border: none;
  margin-top: 200px;
}

input:focus {
  /* elimina el foco cuando se pone el cursor (en el input) */
  outline: none;
}

p {
  color: aliceblue;
  font-size: 25px;
}

h1,
h2 {
  color: aliceblue;
}

h2 {
  margin-top: 160px;
}
</style>
