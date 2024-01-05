<template>
<v-dialog width="600">
    <template v-slot:activator="{ props }">
      <v-btn class="btn-grand" v-bind="props" text="Open Dialog"> </v-btn>
    </template>
  
    <template v-slot:default="{ isActive }">
      <v-card title="Dialog">
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
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
</style>