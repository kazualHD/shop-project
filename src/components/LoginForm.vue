<template>
  <form @submit.prevent class='login__form' action="">
    <form-input label='Email' type="email" placeholder="Почта" v-model="loginFormData.email" />
   <span v-for="error in v$.email.$errors" :key="error.$uid"> {{error.$message}} </span>

    <form-input label='Password' type="password" placeholder="Пароль" v-model="loginFormData.password" />
    <span v-for="error in v$.password.$errors" :key="error.$uid"> {{error.$message}}</span>

    
    <my-button @click='submitForm'>Войти</my-button>
    <img class="sova" src="@/assets/sova.webp" alt="sova">
  </form>
</template>

<script setup lang="ts">
  import useValidation from '@/hooks/LoginPage/useValidation'
  import useVuelidate from '@vuelidate/core'
  import {TypeFormData, TypeRules} from '@/InterfacesTypes/LoginForm/validations'
  import useVisibleLogIn from '@/hooks/LoginPage/useVisibleLogIn'
  import {useRouter} from 'vue-router'


    const router = useRouter()
    const { loginFormData, rules } = useValidation() as {loginFormData: TypeFormData, rules: TypeRules}
    const v$ = useVuelidate(rules, loginFormData)
    const {dialogVisible} = useVisibleLogIn()

    const submitForm = async () => {
      const result = await v$.value.$validate()
      if (result) {
      router.push('/success')
      dialogVisible.value = false
      }
    }

</script>

<style scoped>
.login__form {
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 350px;
    gap: 10px;
}
.sova {
    width: 200px;
    height: 200px;
    align-self: center;
}
</style>
