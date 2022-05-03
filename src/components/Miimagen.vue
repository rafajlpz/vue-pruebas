<template>
  <figure class="imagen">
    <img width="300" src="@/assets/csgo.jpg" alt="Texto alternativo" />
    <figcaption>Titulo de la imagen</figcaption>
  </figure>
</template>

<script></script>

<style lang="scss">
.imagen{
  width: 20vw;
}
    .imagen img{
        object-fit: cover;
        // border:red 5px solid;
        display: block;
        width: 100%;
    }
    .imagen figcaption{
      background-color: black;
      color: white;
      width: 100%;
      display: block;
       
    }


</style>
