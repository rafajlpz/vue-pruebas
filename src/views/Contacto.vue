<template>
  <div class="containe container">
    <h1>{{ title }}</h1>
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
// Dependencias importar el store de la libreria vuex
import { useStore } from "vuex";
import { computed } from "vue";

// Cargar el store
const almacen = useStore();
// Acceder al state con una funcion computada // Calculas funciones computadas para que sea dinamica
const title = computed(() => almacen.state.tituloPrincipal);
</script>

<style></style>
