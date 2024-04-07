import {maxLength, email, required, helpers, minLength} from '@vuelidate/validators';
import {reactive} from 'vue'
import translation from '@/translation/LoginForm/index'
import {TypeFormData, TypeRules} from '@/InterfacesTypes/LoginForm/validations'
const useValidation = () => {
        const loginFormData: TypeFormData = reactive({
                email: '',
                password: '',
                confirmPassword: '',
        })
        
        const rules: TypeRules  = {
                email: {
                    required: helpers.withMessage(translation.reqiredMessage, required),
                    email: helpers.withMessage(translation.emailValidMessage, email)    
                },
                password: {
                    required: helpers.withMessage(translation.reqiredMessage, required),
                    minLength: helpers.withMessage(translation.passwordMinLength, minLength(6)),
                    maxLength: helpers.withMessage(translation.passwordMaxLength, maxLength(20))
                }
        }

        return {loginFormData, rules}
}

export default useValidation;