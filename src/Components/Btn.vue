<script setup>

</script>
<template>
<div class="container">    
  <v-container> 
    <v-row>
      <v-col cols="12">
        <button class="btn-grad"> btn1</button>
      </v-col>  
      <v-col cols="12" >
        <button class="btn-grad2"> btn2</button>
      </v-col>
    </v-row>  
  </v-container>
</div> 
</template>
<style>
             
.btn-grad {
    background-image: linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%);
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;  
     
    
  }
  .btn-grad2 {
    background-image: linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%);
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;  
     
    
  }
  .container{
    display: block;
  }

   
 
 
</style>