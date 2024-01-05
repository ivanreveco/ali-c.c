<script setup>
import Icon from '@/Components/Icon.vue'
import Btn from '@/Components/Btn.vue'

</script>

<template>
  <v-container>
    <v-row>
      <v-col class="container-mlogo " cols="12" align-self="center">
        <div class="container-logo">
          <icon/>
        </div>
      </v-col>
      <v-col cols="12" align-self="center">
        <div class="container-btn">
          <Btn/>
       
        </div>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<style>
body{
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
 }
.container-mlogo{
  margin-top: 110px;
  height:150px;
}
.container-btn{
  margin-top: 100px;
}

</style>