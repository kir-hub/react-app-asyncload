import * as Yup from 'yup';

export const SIGNUP_SCHEMA = Yup.object({
        firstName: Yup.string().min(4).max(20).required,
        lastName: Yup.string().min(4).max(20).required,
        email: Yup.string().email().required(),
        password: Yup.string().required(),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')]).required(),
})