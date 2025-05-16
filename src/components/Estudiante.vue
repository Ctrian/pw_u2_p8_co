<template>
  <div class="container">
    <label for="id_nombre">Nombre:</label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" >
   
    <label for="id_apellido">Apellido:</label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" >

    <button v-on:click="agregarEstudiante()" >Agregar Estudiante</button>
    {{ nuevoNombre }}
    <ul>
       <!-- <li v-for="estu in lista" :key="estu.nombre"> Nombre: {{ estu.nombre }} - Apellido: {{ estu.apellido }}</li> -->
        <li v-for="{ nombre, apellido, genero, edad, curso} in lista" :key="nombre">
             Nombre: {{ nombre }} - Apellido: {{ apellido }} - Genero{{ genero }} - Edad {{ edad }} - Curso {{ curso }}</li>
       
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            //propiedad reactiva para el nombre
            nuevoNombre: "Nuevo",
            nuevoApellido: "Nuevo",
            nuevoGenero: "M",
            nuevoEdad: 0,
            nuevoCurso: "Vue",
            //propiedad reactiva de tipo arreglo
            lista: [{nombre:'Cristian',apellido:'Olivares', genero:'M', edad:25, curso:'Vue'},
                    {nombre:'Juan',apellido:'Pérez', genero:'M', edad:30, curso:'React'},
                    {nombre:'Pedro',apellido:'Gómez', genero:'M', edad:28, curso:'Angular'},
                    {nombre:'María',apellido:'López', genero:'F', edad:22, curso:'Vue'},
                    {nombre:'Ana',apellido:'Martínez', genero:'F', edad:27, curso:'React'},
                    {nombre:'Luis',apellido:'Fernández', genero:'M', edad:35, curso:'Angular'},
                    {nombre:'Jose',apellido:'Ramirez', genero:'M', edad:40, curso:'Vue'},
                    ],
        };
    },
    //metodos
    methods: {
        agregarEstudiante(){
            const nuevo= {
                nombre: this.nuevoNombre,
                apellido: this.nuevoApellido,
                genero: this.genero,
                edad: this.edad,
                curso: this.curso
            }
            //agregar un nuevo estudiante a la lista
            this.lista.unshift(nuevo);
            // this.lista.push(nuevo);
        },
    },
}
</script>

<style>

</style>