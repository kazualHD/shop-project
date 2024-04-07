import {ref} from 'vue'


const useForms = () => {
    const logIn = ref(false);
    const signUp = ref(false)

    const openlogInForm = () => {
        logIn.value = true;
        signUp.value = false
    }
    const closeDialog = () => {
        logIn.value = false;
        signUp.value = false
    }

    const openSignUpForm = () => {
        signUp.value = true;
        logIn.value = false
    }

    return {logIn, signUp, openlogInForm, openSignUpForm, closeDialog}
}

export default useForms