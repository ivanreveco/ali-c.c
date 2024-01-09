<template>
  <v-container class="containerList">
    <v-expansion-panels>
      <v-expansion-panel class="containerp bg-transparent">
        <v-expansion-panel-title class="btn-grad">
          <div id="txt">
            PRINCIPAL
            <v-avatar class="tiktok">
              <v-img
                class="tiktok"
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
            <v-hover v-slot="{ isHovering, props }">
              <v-window show-arrows class="w-100" v-bind="props">
                <v-window-item v-if="activeItem === 0">
                  <v-card id="containerimg" class="d-flex justify-center align-center">
                    <div class="logo-instagram">
                      <v-img src="../assets/icon/pngwing.png" alt="Instagram"></v-img>
                    </div>
                    <img class="img-w w-100" src="../assets/img/IMG_8093.jpg" />
                    <div class="logo-tiktok">
                      <v-img src="../assets/tiktok_logo.png" alt="TikTok"></v-img>
                    </div>
                  </v-card>
                </v-window-item>
                <v-window-item v-else>
                  <v-card class="d-flex justify-center align-center">
                    <img src="../assets/img/CEB59BCC-0435-44CD-85C5-95BB568F5C1A.jpg" alt="">
                  </v-card>
                </v-window-item>
                <v-overlay
                  :model-value="isHovering"
                  contained
                  scrim="#036358"
                  id="overlais"
                  class="d-flex align-center justify-center"
                >
                  <v-btn class="ig" variant="flat">Instagram</v-btn>
                  <v-btn class="tiktok" variant="flat">Tiktok</v-btn>
                </v-overlay>
              </v-window>
            </v-hover>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel id="btn2" class="containerp bg-transparent">
        <v-expansion-panel-title class="btn-grad">
          <div id="txt2">
            UÑAS
          </div>
          <template v-slot:actions="{ expanded }">
            <v-icon :color="!expanded ? 'teal' : ''"></v-icon>
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="bg-text">
          <div class="text-container">
            <v-window show-arrows class="w-100">
              <v-window-item>
                <v-card class="d-flex justify-center align-center">
                  <img class="w-100 bg-light" src="../assets/img/IMG_9658.jpg" alt="">
                </v-card>
              </v-window-item>
              <v-window-item>
                <v-card class="d-flex justify-center align-center">
                  <img src="../assets/img/CEB59BCC-0435-44CD-85C5-95BB568F5C1A.jpg" alt="">
                </v-card>
              </v-window-item>
              <v-window-item>
                <v-card class="d-flex justify-center align-center">
                  <img src="../assets/img/IMG_9658" alt="">
                </v-card>
              </v-window-item>
            </v-window>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const activeItem = ref(0);

onMounted(() => {
  setInterval(() => {
    activeItem.value = 1 - activeItem.value;
  }, 5000);
});
</script>

<style>
.btn-grad {
  width: 10rem;
  max-height: 3rem;
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
  max-height: 20rem;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.text-container {
  position: relative;
  display: flex;
  margin-top: 6rem;
  max-height: 10px;
  max-width: 20rem;
}

.containerp {
  display: block;
  border: none;
  border: 0;
  border: 1px solid transparent;
}

#txt {
  margin-left: 25%;
  font-size: 1.5rem;
}

#txt2 {
  margin-left: 35%;
  font-size: 1.5rem;
}

.tiktok {
  position: absolute;
  z-index: 2;
  margin-left: 10px;
  background: transparent;
}

#containerimg {
  width: 20rem;
}

.containerp {
  max-width: 10rem;
}

.containerList {
  max-width: 20rem;
}

.logo-instagram {
  position: absolute;
  bottom: 5%;
  right: 5%;
  max-width: 25%;
  max-height: 25%;
  z-index: 3;
}

.logo-tiktok {
  position: absolute;
  bottom: 5%;
  left: 5%;
  max-width: 25%;
  max-height: 25%;
  z-index: 3;
}
.overlais{
  display: block;
}

</style>
