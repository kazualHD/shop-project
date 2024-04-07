export default {
    login_Validaros: {
        required: 'Field is required',
        email: {
            email: 'Input is not a valid email'
        },
        passwors: {
            minLength: 'Password must be at least 6 characters',
            maxLength: 'Password must be at most 20 characters'
        },
        confirmPassword: {
            sameAs: 'Passwords must match'
        }
    }
}