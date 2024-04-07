<template>
  <div class="wrapper">
    <div class="navbar">
      <div @click="$router.push('/')" class="navbar__logo"><img src="@/assets/git.png" alt="picture"></div>
      <div class="navbar__items">
        <my-button> Главная </my-button>
        <my-button @click="$router.push('/hello')"> Товары </my-button>
        <my-button @click="$router.push('/login')" @mouseover="showOptions = true" @mouseleave="showOptions = false" class="login-btn"> Вход 
          <div v-if="showOptions" class="options">
         <div @click='makeVisible' class='loginItem'> <my-button @click='openSignUpForm'> Зарегистрироваться </my-button></div> 
          <div @click="makeVisible" class='loginItem'> <my-button @click='openlogInForm' > Войти </my-button> </div>
          </div>
        </my-button>
      </div>
    </div>

     <div v-if='logIn'>
      <my-dialog v-model:show="dialogVisible">
     <login-form></login-form>
    </my-dialog>
     </div>
     <div v-else-if='signUp'>
        <my-dialog v-model:show="dialogVisible">
           <sign-up-form > </sign-up-form> 
        </my-dialog>
     </div>
  
  </div>
</template>

<script setup lang='ts'> 
import { ref } from 'vue'
import useVisibleLogIn from '@/hooks/LoginPage/useVisibleLogIn'
import LoginForm from '@/components/LoginForm.vue'
import SignUpForm from '@/components/SignupForm.vue'
import useForms from '@/hooks/Navbar/useForms'



const { makeVisible, dialogVisible } = useVisibleLogIn();
const {logIn, signUp, openlogInForm, openSignUpForm} = useForms();
const showOptions = ref(false);

</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.navbar {
  height: 70px;
  width: 900px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 0 15px;
  margin: 0 auto;
}

.navbar__items {
  display: flex;
  align-items: center; 
}

.navbar__items button {
  margin-right: 100px;
}

.navbar__logo {
  margin-right: 15px;
  width: 100px;
}

.navbar__logo img {
  width: 100%; 
}

.login-btn {
  position: relative;
}

.options {
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
}
.loginItem {
  margin-top: 20px
}

</style>
