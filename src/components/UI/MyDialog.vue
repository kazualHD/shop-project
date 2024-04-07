<template>
  <div class='my__dialog' @click="$emit('update:show', false)" v-if="show">

  <div @click.stop class='dialog__content'> <slot> </slot> </div>
  
  </div>
</template>

<script>
export default {
name: 'my-dialog',
props: {
  show: {
    type: Boolean,
    default: false
  }
},
setup() {
  console.log('d')
}
}
</script>

<style>
.my__dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
}
.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>