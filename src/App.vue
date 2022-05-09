<template>
  <the-menu></the-menu>
  <router-view />
  <the-footer></the-footer>
</template>

<script setup>
//Dependencias
import TheMenu from "@/components/TheMenu.vue";
import TheFooter from "@/components/TheFooter.vue"
//Importacion de ficheros con Nodejs
require("@/assets/scss/_reset.scss");
require("@/assets/scss/estructura.scss");
</script>


