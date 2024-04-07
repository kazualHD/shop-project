<template>
  <button class='my__button'>
 <slot> </slot>
  </button>
</template>

<script>
export default {
name: 'my-button'
}
</script>

<style scoped>
.my__button {
  padding: 10px 15px;
  border-radius: 5px;
  border: 2px solid teal;
  cursor: pointer;
  background-color: transparent;
  
}
</style>