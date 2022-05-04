<template>
  <nav class="main-menu">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="contacto">Contacto</router-link> |
    <router-link to="/galeria"> Galeria</router-link>
  </nav>
  
</template>

<script setup>

</script>

<style scoped lang="scss">
.main-menu{
    background-color: #0371b3;
    .router-link-exact-active{
        background-color: #f8690d;
        text-shadow: 0 1px 0 white;
    }
    a{
        display:block;
        padding: .5em;
        text-decoration: none;
        color: white;
        &:hover{
            background-color: #0a4f7f;
            border-color:#0a4f7f ;
        }
    }
    @media (min-width: 600px) {
        &{
            display: flex;
            a{
                width: 25%;
               
                text-align: center;
            }
        }
    }
}




</style>