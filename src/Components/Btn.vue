<template>
  <v-container class="container">
    <v-expansion-panels>
      <v-expansion-panel class="containerp bg-transparent">
        <v-expansion-panel-title class="btn-grad">
          <div id="txt">
            Cosmetología y Make-up 
            <v-avatar class="tiktok" >
              <v-img class="tiktok"
                src="../assets/icon/pngwing.png"
                alt="John"
              ></v-img>
            </v-avatar>
          </div>
          <template v-slot:actions="{ expanded }">
            <v-icon :color="!expanded ? 'teal' : ''"></v-icon>
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="bg-text">
         
          <div class="text-container">
            <v-window show-arrows class="w-100">
              
              <v-window-item >
               
                <v-card class="d-flex justify-center align-center">
                  <img class="img-w w-100 " src="../assets/img/IMG_8093.jpg"
                   >
                   
                </v-card>
                
              </v-window-item>
              <v-window-item>
                <v-card class="d-flex justify-center align-center">
                  <img src="../assets/img/CEB59BCC-0435-44CD-85C5-95BB568F5C1A.jpg" alt="">
                </v-card>
              </v-window-item>
            </v-window>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

     
        <v-expansion-panel id="btn2" class="containerp bg-transparent">
          <v-expansion-panel-title  class="btn-grad">
            <div id="txt">
              Cosmetología y Make-up
            </div>
            
            <template v-slot:actions="{ expanded }">
              <v-icon :color="!expanded ? 'teal' : ''"></v-icon>
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text class="bg-text">
            <div class="text-container">
              <v-window show-arrows class="w-100">
                <v-window-item >
                  <v-card class="d-flex justify-center align-center">
                    <img class="w-100 bg-light" src="../assets/img/IMG_9658.jpg" alt="">
                  </v-card>
                </v-window-item>
                <v-window-item>
                  <v-card class="d-flex justify-center align-center">
                    <img src="../assets/img/CEB59BCC-0435-44CD-85C5-95BB568F5C1A.jpg" alt="">
                  </v-card>
                </v-window-item>
              </v-window>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
  </v-container>
</template>

<style>
.btn-grad {
  width: auto;
 
  background-image: linear-gradient(to right, #ff6e7f 0%, #bfe9ff 51%, #ff6e7f 100%);
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  justify-content: center;
}
.btn-grad::selection {
  background-color: #eee;
}
#btn2 {
  margin-top: 1.5rem;
  
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
}

.bg-text {
  height: 40rem;
  max-height: 20rem; /* Ajusta según sea necesario */
  display: flex;
  align-items: center;
  overflow: hidden;
}

.text-container {
  position: relative;
  display: flex;
  margin-top: 6rem;
  max-height: 10px;
}
.containerp {
  display: block;
  border: none;
  border:0;
  border:1px solid transparent;
}

.poruebas {
  width: 100%;
  height: 100%;
  object-fit: repeat;
}
#txt{
  margin-left:30% ;

}

.tiktok{
 position: absolute;
 z-index: 2;
 margin-left: 10px;
 background:transparent;
 
}
.img-w{

  
}
/* Cambio del color de fondo para el v-expansion-panel-text */

/* Ajusta el estilo del carrusel según sea necesario */
</style>
