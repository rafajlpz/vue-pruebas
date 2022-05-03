<template>
  <div>
    <img src="@/assets/csgo.jpg" alt="">
    <h1 class="titulo">easy peasy lemon squeshy</h1>
    {{ titulo }}
   
  </div>
</template>

<script setup>

// import datos from "@/assets/senlleiras.json";
// Importar el store de vuex
import { useStore} from "vuex";

// Inicializar el store (Usar el store de index.js que es una FUNCION)
const store = useStore();
console.log(store.state.tituloPrincipal)


let titulo = "Datos del titulo";

</script>

<style>
</style>
