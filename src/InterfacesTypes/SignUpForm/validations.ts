import {ValidationRule} from '@vuelidate/core'

export interface TypeSignUpFormData {
    email: string, 
    password: string,
    confirmPassword: string,
    nickname: string
}


type TypeValidatorsNames = 'email' | 'required' | 'minLength' | 'maxLength' | 'sameAs';
type TypeValidators = Partial<Record<TypeValidatorsNames, ValidationRule>>;

export interface TypeRules {
  email: TypeValidators;
  password: TypeValidators;
  confirmPassword: TypeValidators;
  nickname: TypeValidators;
}
