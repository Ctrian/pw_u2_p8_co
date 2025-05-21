<template>
  <div class="container">
    <div v-show="mostrar">
      <h1>Estudiante guardado</h1>
    </div>

    <form class="formulario">
      <div class="input-group">
        <label for="id_nombre">Nombre:</label>
        <input v-model="nuevoNombre" id="id_nombre" type="text" />

        <label for="id_apellido">Apellido:</label>
        <input v-model="nuevoApellido" id="id_apellido" type="text" />

        <label for="id_genero">Genero:</label>
        <input v-model="nuevoGenero" id="id_genero" type="text" />

        <label for="id_edad">Edad:</label>
        <input v-model="nuevoEdad" id="id_edad" type="number" />

        <label for="id_curso">Curso:</label>
        <input v-model="nuevoCurso" id="id_curso" type="text" />
      </div>

      <div class="boton-container">
        <button v-on:click.prevent="agregarEstudiante()" class="boton">
          Agregar
        </button>
      </div>
    </form>

    <div class="tabla-container">
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Genero</th>
            <th>Edad</th>
            <th>Curso</th>
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="{ nombre, apellido, genero, edad, curso } in lista"
            :key="nombre"
          >
            <td>{{ nombre }}</td>
            <td>{{ apellido }}</td>
            <td>{{ genero }}</td>
            <td>{{ edad }}</td>
            <td>{{ curso }}</td>
            <td><Button class="bver">Ver</Button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lista: [
        {
          nombre: "Cristian",
          apellido: "Olivares",
          genero: "M",
          edad: 25,
          curso: "Vue",
        },
        {
          nombre: "Juan",
          apellido: "Pérez",
          genero: "M",
          edad: 30,
          curso: "React",
        },
        {
          nombre: "Pedro",
          apellido: "Gómez",
          genero: "M",
          edad: 28,
          curso: "Angular",
        },
        {
          nombre: "María",
          apellido: "López",
          genero: "F",
          edad: 22,
          curso: "Vue",
        },
        {
          nombre: "Ana",
          apellido: "Martínez",
          genero: "F",
          edad: 27,
          curso: "React",
        },
        {
          nombre: "Luis",
          apellido: "Fernández",
          genero: "M",
          edad: 35,
          curso: "Angular",
        },
        {
          nombre: "Jose",
          apellido: "Ramirez",
          genero: "M",
          edad: 40,
          curso: "Vue",
        },
      ],
      mostrar: false,
      nuevoNombre: "",
      nuevoApellido: "",
      nuevoGenero: "",
      nuevoEdad: "",
      nuevoCurso: "",
    };
  },
  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        genero: this.nuevoGenero,
        edad: this.nuevoEdad,
        curso: this.nuevoCurso,
      };
      this.lista.unshift(nuevo);
      this.mostrar = true;
      setTimeout(() => {
        this.mostrar = false;
      }, 3000);
      // Limpiar campos
      this.nuevoNombre = "";
      this.nuevoApellido = "";
      this.nuevoGenero = "";
      this.nuevoEdad = "";
      this.nuevoCurso = "";
    },
  },
};
</script>
<style>
.container {
  min-height: 100vh;
  background: #cde4fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  max-width: 600px;
  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;
}

.formulario {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  box-sizing: border-box;
}

.input-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
}

.input-group label {
  color: black;
  text-align: left;
  margin-bottom: 3px;
  width: 100%;
}

.input-group input {
  background: #387cc3;
  color: white;
  border-radius: 8px;
  border: 2px solid #737171;
  width: 100%;
  margin-bottom: 10px;
  padding: 6px 10px;
  box-sizing: border-box;
}

.boton-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

button, .bver {
  background: #387cc3;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 8px 30px;
  border-radius: 8px;
  border: none;
}

.tabla-container {
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}

table {
  background: rgb(168, 201, 103);
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  box-sizing: border-box;
}

th, td {
  padding: 8px 10px;
  text-align: center;
}
</style>