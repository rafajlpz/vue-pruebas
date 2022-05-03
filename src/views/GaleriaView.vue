<template>
  <section class="galeria">
      <h1>{{titulo}}</h1>
      <div class="contenedor-galeria">
        <Miimagen></Miimagen>
        <Miimagen></Miimagen>
        <Miimagen></Miimagen>

      </div>
  </section>

</template>


<script setup>
//Dependencias
import {useStore} from 'vuex';
import {computed} from "vue";
import Miimagen from "@/components/Miimagen" 

//Cargar el Store
const store = useStore();

const titulo = computed(()=>store.state.tituloPrincipal)


</script>


<style>
.contenedor-galeria{
    display: flex;
    flex: wrap;
}
</style>