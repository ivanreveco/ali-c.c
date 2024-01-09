<template>
  <div class="container">
    <v-container class="container" :elevate="0">
      <v-row  no-gutters>
        <v-col cols="12" align-self="center" >
          <v-sheet  class="logo-container bg-transparent pa-3">
            <img class="logo bg-red "  alt="logo ali" src="../assets/icon/IMG_2918.jpg">
          </v-sheet>
        </v-col>   
        <v-col cols="12" align-self="center">
          <div class="texto2  "> ✨Ali Castillo Cid✨ </div>
        </v-col>
        <v-col cols="12" align-self="center">
          <div class="texto  pa-1">Cosmetóloga <br> Manicurista | Maquilladora </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Black+Mango&display=swap');
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
    display: flex;
    max-width: 200px;
    border-radius: 100%;
    overflow: hidden; /* Esto asegura que la imagen respete el borde circular */
    box-shadow: 0 0 25px #eee;
  

  }
  .texto {
    margin-top: 15px;
    display: flex;
    font-size:1rem;
    font-family: 'BlackMango';
    text-align: center;
    color:white;
    width: auto;
  }
  .texto2 {
    margin-top: 15px;
    display: flex;
    font-size:30px;
    font-family: 'brytanni';
    text-align: center;
    color:white;
    width: 20rem;
    
   
  }
  @font-face {
    font-family: 'BlackMango' ;
    src: url('../Fonts/BlackMango-Medium.ttf');
  }
  @font-face {
    font-family: brytanni;
    src: url('../Fonts/BrittanySignature.ttf');
  }

</style>
