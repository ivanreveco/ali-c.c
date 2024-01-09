<script setup>
import Icon from '@/Components/Icon.vue'
import Btn from '@/Components/Btn.vue'
</script>

<template>
  <v-container class="containerApp">
    <v-row>
      <v-col class="container-mlogo" cols="12" align-self="center">
        <div class="container-logo">
          <Icon />
          <Btn />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
body {
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}
.container-logo{
  display: block;

}
.containerApp{
  margin-top:15%;
}


/* Agrega estilos adicionales según sea necesario */
</style>
