<script setup>
import Icon from '@/Components/Icon.vue'
import Btn from '@/Components/Btn.vue'
</script>

<template>
  <v-container>
    <v-row>
      <v-col class="container-mlogo" cols="12" align-self="center">
        <div class="container-logo">
          <Icon />
        </div>
      </v-col>
      <v-col cols="12" align-self="center">
        <div class="container-btn">
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

.container-mlogo {
  margin-top: 1.5rem; /* Ajusta este valor según tus necesidades */
  height: 50px;
  z-index: 1; 
}

.container-btn {
  position: relative;
  margin-top: 10rem;
  z-index: 3;
  /* Ajusta el índice Z para que esté por debajo del resto */
}

/* Agrega estilos adicionales según sea necesario */
</style>
