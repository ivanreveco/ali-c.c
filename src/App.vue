<script setup>
import Card from '@/Components/Card.vue'

</script>

<template >
  <div class="container-card">
    <Card ></Card>
  </div>
  
</template>

<style>
 body{
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
 }
 .container-card{
  position: relative;
  align-items: center;
  justify-content: center;
  align-content: center;
  display: flex;
  background-color: black;
  
 }
</style>