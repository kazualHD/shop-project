<template>
  <input :value='modelValue' @input='$emit("update:modelValue", $event.target.value)' class='form-input' type="text">
</template>

<script>
export default {
name: 'form-input',
props: {
  modelValue: [String, Number]
}
}
</script>

<style scoped>
  .form-input {

    padding: 10px;
    border-radius: 5px;
    border: 2px solid teal;
    
  }
</style>