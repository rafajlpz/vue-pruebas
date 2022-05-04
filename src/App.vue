<template>
  <the-menu></the-menu>
  <router-view />
  <the-footer></the-footer>
</template>

<script setup>
//Dependencias
import TheMenu from "@/components/TheMenu.vue";
import TheFooter from "@/components/TheFooter.vue"
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  display: grid;
  grid-template-rows: auto 1fr auto;

  padding: 0;
  margin: 0;
  min-height: 100vh;

  background-color: white;

  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
