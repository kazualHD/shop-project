<template>
  <form @submit.prevent class='signUp__form'> 
    <form-input label='Nickname' type="text" placeholder="Никнейм" v-model='signUpFormData.nickname'/>
    <span v-for="error in v$.nickname.$errors" :key="error.$uid"> {{error.$message}}</span>

    <form-input label='Email' type="email" placeholder="Почта" v-model='signUpFormData.email' />
    <span v-for="error in v$.email.$errors" :key="error.$uid"> {{error.$message}}</span>
  
   <form-input label='Password' type="password" placeholder="Пароль" v-model='signUpFormData.password' />
   <span v-for='errors in v$.password.$errors' :key='errors.$uid'> {{errors.$message}}</span>

   <form-input label='ConfirmPassword' type='password' placeholder='Подтвердите пароль' v-model='signUpFormData.confirmPassword' /> 
   <span v-for='errors in v$.confirmPassword.$errors' :key='errors.$uid'> {{errors.$message}}</span>
  


   <my-button @click='submitForm'>Зарегистрироваться</my-button>
     <img class="sova" src="@/assets/sova.webp" alt="sova">
   </form>
</template>

<script setup lang='ts'>
import useValidation from '@/hooks/SignUpPage/useValidation'
import useVuelidate from '@vuelidate/core'
import useVisibleLogIn from '@/hooks/LoginPage/useVisibleLogIn'
import { TypeSignUpFormData , TypeRules} from '@/InterfacesTypes/SignUpForm/validations'
import {ComputedRef} from "vue"
import {useRouter} from 'vue-router'


const router = useRouter()

const {signUpFormData, rules} = useValidation() as {signUpFormData: TypeSignUpFormData, rules:ComputedRef<TypeRules>}
const v$ = useVuelidate(rules, signUpFormData)
const {dialogVisible} = useVisibleLogIn()

 const submitForm = async () => {
      const result = await v$.value.$validate()
      if (result) {
       router.push('/success')
       dialogVisible.value = false
      }
    }
</script>

<style>
.signUp__form {
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
form span {
  color: red;
}
</style>