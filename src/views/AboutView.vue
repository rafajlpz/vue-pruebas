<template>
  <div class="about">
    <h2>{{almacen.state.tituloPrincipal}}</h2>
  </div>
</template>

<script setup>
//Importacion de dependencias
import {useStore} from "vuex";

//Cargar el Store
const almacen = useStore();

</script>

