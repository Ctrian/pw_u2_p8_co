<template>
  <!-- <HolaMundoView/> -->
  <!-- <Contador/> -->
  <!-- <EstudianteView/> -->
  <!-- <EstudianteTablaView/> -->
   <PreguntaView/>
</template>

<script>
import HolaMundoView from '@/views/HolaMundoView.vue';
import Contador from '@/views/ContadorView.vue';
import EstudianteView from '@/views/EstudianteView.vue';
import EstudianteTablaView from '@/views/EstudianteTablaView.vue';
import PreguntaView from '@/views/PreguntaView.vue';

export default {
  name: 'App',
  components: {
    HolaMundoView,
    Contador,
    EstudianteView,
    EstudianteTablaView,
    PreguntaView
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
