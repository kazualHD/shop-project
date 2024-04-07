<template>
  
 <div class="app">
  <app-navbar></app-navbar>
  <router-view>  </router-view>

 </div>
 
  
</template>
<script setup lang="ts">
import AppNavbar from '@/pages/AppNavbar.vue'
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
