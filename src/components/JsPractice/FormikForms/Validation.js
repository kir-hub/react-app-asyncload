import * as Yup from 'yup';

 const validationSchema = Yup.object({
    firstName: Yup.string()
    .min(3)
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
    .min(3)
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')])
      .required(),
  });
//   onSubmit: values => {
//     alert(JSON.stringify(values, null, 2));
//   },

export default validationSchema;