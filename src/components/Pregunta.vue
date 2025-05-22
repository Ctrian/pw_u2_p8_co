<template>
  <div class="container">
    <img
      src="https://images.pexels.com/photos/17807193/pexels-photo-17807193/free-photo-of-naturaleza-camara-fotografia-hojas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="No se pudo cargar"
    />
    <div class="container-2">
      <div class="pregunta-container">
        <input v-model="pregunta" placeholder="Hazme una pregunta" />
        <p>Recuerda terminar con un signo de pregunta (?)</p>
        <h2>{{ pregunta }}</h2>
        <h1>{{ respuesta }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            pregunta: null,
            respuesta: null
        }
    },
    watch: {
        pregunta(value, oldValue) {
            console.log("valor actual: " + value)
            console.log("valor anterior: " + oldValue)
        }
    }
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
    outline:none;
}

p {
    color: aliceblue;
    font-size: 25px;
}

h1, h2 {
    color: aliceblue;
}

h2 {
    margin-top: 160px;
}
</style>
