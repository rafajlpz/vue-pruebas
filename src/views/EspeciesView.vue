<template>
  <div class="container">
    <h1 class="titulo">{{ titulo }}</h1>
    <select>
        <option v-for="item in colores" :key="item" v-bind:value="item">{{item}}</option>
        
        <ol v-if="colores.length>0">
      <li v-for="valor in colores" :key="valor">{{ valor }}</li>
    
    </ol>
    </select>
  </div>
</template>

<script setup>
// const respuesta = fetch('');
// console.log(respuesta);
const titulo = "Listado de especies";
const colores = ["azul", "verde", "naranja"];

const leerDatos = async () => {
  const response = await fetch(
    "https://altas-senlleiras-default-rtdb.europe-west1.firebasedatabase.app/species.json"
  );
  const data = await response.json();
  console.log(data);
};
leerDatos();
</script>

<style>
.titulo {
  color: white;
}
</style>
