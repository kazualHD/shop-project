import translation from './signUpForm'

const reqiredMessage = translation.signUp_Validaros.required;
const emailValidMessage = translation.signUp_Validaros.email.email;
const passwordMinLength = translation.signUp_Validaros.passwors.minLength;
const passwordMaxLength = translation.signUp_Validaros.passwors.maxLength;
const passwordSameAs = translation.signUp_Validaros.confirmPassword.sameAs;
const nicknameMinLength = translation.signUp_Validaros.nickname.minLength;
const nicknameMaxLength = translation.signUp_Validaros.nickname.maxLength;

export default  {
    reqiredMessage,
    emailValidMessage,
    passwordMinLength,
    passwordMaxLength,
    passwordSameAs,
    nicknameMinLength,
    nicknameMaxLength
}