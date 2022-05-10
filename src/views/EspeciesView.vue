<template>
  <div class="container" >
   <h1 class="titulo">{{ titulo }}</h1>
    <select name="colores" id="colores">
      <option v-for="(valor,indice) in data.colores" :key="indice" :value="valor">
        {{ valor }}
      </option>
      
    </select>
    <p>{{data.nombre}}</p>
  </div>
</template>

<script setup>
//Importamos libreria para hacerlo reactiva
import { ref } from "vue";

//Declaramos variables globales
let data = ref({}); //No tiene que ser nulo para que de error, a no ser que el error incial no sea nulo, el mismo tipo de dato.

//Utilizar promesa para obtencion de datos
const obtenerDatos = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/rafajlpz/lectura-json/main/colores.json"
    );
    data.value = await response.json();
    //console.log(data.value);
  } catch (error) {
    console.log(`${error}`);
  }
};
obtenerDatos();
</script>

<style>
.titulo {
  color: white;
}
</style>
