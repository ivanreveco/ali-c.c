<template>
  <div class="container">
    <v-container class="container" :elevate="0">
      <v-row  no-gutters>
        <v-col cols="12" align-self="center" >
          <v-sheet  class="logo-container bg-transparent pa-2">
            <img class="logo bg-red "  alt="logo ali" src="../assets/icon/IMG_2918.jpg">
          </v-sheet>
        </v-col>   
        <v-col cols="12" align-self="center">
          <div class="texto pa-2 ">✨ Ali Castillo Cid | Cosmetóloga | Manicurista✨</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    
  }

  .logo {
    margin-top: 10rem;
    display: flex;
    max-width: 200px;
    border-radius: 100%;
    overflow: hidden; /* Esto asegura que la imagen respete el borde circular */
    box-shadow: 0 0 25px #eee;
  

  }
  .texto {
    display: flex;
    font-size:1.5rem;
    font-family: 'Dancing Script', cursive;
    text-align: center;
  }
</style>
