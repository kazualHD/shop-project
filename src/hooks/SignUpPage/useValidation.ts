import {maxLength, email, required, helpers, minLength, sameAs} from '@vuelidate/validators';
import {reactive, computed, ComputedRef} from 'vue'
import { TypeSignUpFormData, TypeRules } from '../../InterfacesTypes/SignUpForm/validations';
import translation from '@/translation/SignUpForm'
const useValidation = () => {
    const signUpFormData: TypeSignUpFormData= reactive({
        email: '',
        password: '',
        confirmPassword: '',
        nickname: '',
    })

    const rules: ComputedRef<TypeRules>= computed(() => ({
        email: {
          required: helpers.withMessage(translation.reqiredMessage, required),
          email: helpers.withMessage(translation.emailValidMessage, email)
        },
        password: {
          required: helpers.withMessage(translation.reqiredMessage, required),
          minLength: helpers.withMessage(translation.passwordMinLength, minLength(6)),
          maxLength: helpers.withMessage(translation.passwordMaxLength, maxLength(20))
        },
        confirmPassword: {
          required: helpers.withMessage(translation.reqiredMessage, required),
          sameAs: helpers.withMessage(translation.passwordSameAs, sameAs(signUpFormData.password))
        },
        nickname: {
          required: helpers.withMessage(translation.reqiredMessage, required),
          minLength: helpers.withMessage(translation.nicknameMinLength, minLength(6)),
          maxLength: helpers.withMessage(translation.nicknameMaxLength, maxLength(20))
        }
      }))
  
      return { signUpFormData, rules }
    }

export default useValidation;