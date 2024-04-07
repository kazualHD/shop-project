import {ValidationRule} from '@vuelidate/core'
export interface TypeFormData  {
    email: string,
    password: string,
    confirmPassword: string
}
type TypeValidatorsNames = 'email' | 'required' | 'minLength' | 'maxLength';
type TypeValidators = Partial<Record<TypeValidatorsNames, ValidationRule>>;

export interface TypeRules {
  email: TypeValidators;
  password: TypeValidators;
}
