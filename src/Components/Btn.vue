<template>
  <v-container class="containerList">
    <v-expansion-panels>
      <v-expansion-panel class="containerp bg-transparent">
        <v-expansion-panel-title class="btn-grad">
          <div id="txt">
            PRINCIPAL
          </div>
          <template v-slot:actions="{ expanded }">
            <v-hover v-slot="{ isHovering, props }">
              <v-icon :color="(!isHovering && expanded) ? 'teal' : ''"></v-icon>
            </v-hover>
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="bg-text">
          <div class="text-container">
            <v-window 
            :transition="windowTransition"
            v-bind="props" 
            class="w-100">
              <v-window-item  v-if="activeItem === 0" class="window-item-transition">
                <v-card id="containerimg" class="d-flex justify-center align-center">
                  <img class="img-w w-100" src="../assets/img/IMG_8093.jpg" />
                </v-card>
              </v-window-item>
              <v-window-item transition="scroll-x-transition" v-else-if="activeItem === 1" class="window-item-transition">
                <v-card id="containerimg" class="d-flex justify-center align-center">
                 
                  <img class="img-w w-100" src="../assets/img/IMG_9658.jpg" />
                 
                </v-card>
              </v-window-item>
              <v-window-item transition="scroll-x-transition" v-else-if="activeItem === 2" class="window-item-transition">
                <v-card class="d-flex justify-center align-center">
                  <img src="../assets/img/CEB59BCC-0435-44CD-85C5-95BB568F5C1A.jpg" alt="">
                </v-card>
              </v-window-item>
              <v-overlay
                :model-value="true"
                contained
                scrim="#036358"
                id="overlais"
                class="d-flex align-center justify-center"
              >
                <div class="btns">
                  <v-btn class="ig bg-transparent" variant="flat"><a href="https://www.instagram.com/ali.cc.__?igsh=MTJ3anZsMHAycGt1cA=="><img class="ig" src="../assets/icon/instgram.png" alt=""></a></v-btn>
                  <v-btn class="tiktok bg-transparent" variant="flat"><a href="https://www.tiktok.com/@alimon27"><img class="tk" src="../assets/icon/pngwing.png" alt=""></a></v-btn>
                </div>
              </v-overlay>
            </v-window>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel id="btn2" class="containerp bg-transparent">
        <v-expansion-panel-title class="btn-grad">
          <div id="txt2">
            UÑAS
          </div>
          <template v-slot:actions="{ expanded }">
            <v-hover v-slot="{ isHovering, props }">
              <v-icon :color="(!isHovering && expanded) ? 'teal' : ''"></v-icon>
            </v-hover>
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="bg-text">
          <div class="text-container">
            <v-window 
            :transition="windowTransition"
            v-bind="props" 
            class="w-100">
              <v-window-item  v-if="activeItem === 0" class="window-item-transition">
                <v-card id="containerimg" class="d-flex justify-center align-center">
                  <img class="img-w w-100" src="../assets/img/IMG_9105.jpg" />
                </v-card>
              </v-window-item>
              <v-window-item transition="scroll-x-transition" v-else-if="activeItem === 1" class="window-item-transition">
                <v-card id="containerimg" class="d-flex justify-center align-center">
                  <img class="img-w " src="../assets/img/BFF1B19F-DC65-46EE-9A19-821CC251BC51.jpeg" />
                </v-card>
              </v-window-item>
              <v-window-item transition="scroll-x-transition" v-else-if="activeItem === 2" class="window-item-transition">
                <v-card class="d-flex justify-center align-center">
                  <img class="img-w" src="../assets/img/IMG_9637.jpg" alt="">
                </v-card>
              </v-window-item>
              <v-overlay
                :model-value="true"
                contained
                scrim="#036358"
                id="overlais"
                class="d-flex align-center justify-center"
              >
                <div class="btns">
                  <v-btn class="ig bg-transparent" variant="flat"><a href="https://www.instagram.com/ali.cc.nails?igsh=MXZqeHc5d2hibnBoMQ=="><img class="ig" src="../assets/icon/instgram.png" alt=""></a></v-btn>
                  <v-btn class="tiktok bg-transparent" variant="flat"><a href="https://www.tiktok.com/@ali.cc.nails?_t=8iti45t9OH0&_r=1"><img class="tk" src="../assets/icon/pngwing.png" alt=""></a></v-btn>
                </div>
              </v-overlay>
            </v-window>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const activeItem = ref(0);

onMounted(() => {
  setInterval(() => {
    activeItem.value = (activeItem.value + 1) % 3;
  }, 5000);
});

const windowTransition = computed(()=>{
  return activeItem.value !==null ? 'scroll-x-transition' : '';
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

.window-item-transition {
  animation: move 0.8s ease;
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
  max-width: 20rem;
  width: 10rem;
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


.overlais {
  display: block;
}
.btns{
  margin-bottom: 5rem;
}
.tk{
  width: 50px;
}
.ig{
  width: 50px;
}
.img-w{
  width: auto;
  max-width: 21rem;
}
</style>
