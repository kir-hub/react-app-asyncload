// import React from 'react';
//  import { useFormik, Form, Formik, Field } from 'formik';
//  import Input from './input/Input'
// import {SIGNUP_SCHEMA} from './validate/Validate'

// function SignUpForm(props){
//     const {onSubmit} = props;
//     const initialValues = {
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',

//     }
//     const fields = [
//         {
//             name: 'firstName',
//             type: 'text',
//             placeHolder: 'firstName',
//         },
//         {
//             name: 'lastName',
//             type: 'text',
//             placeHolder: 'lastName',
//         },
//         {
//             name: 'email',
//             type: 'type',
//             placeHolder: 'email',
//         },
//         {
//             name: 'password',
//             type: 'password',
//             placeHolder: 'password',
//         },
//         {
//             name: 'password',
//             type: 'password',
//             placeHolder: 'repeat password',
//         },
//     ];
//     return (
//         <Formik 
//         initialValues={initialValues}
//         onSubmit={onSubmit}
//         validationSchema={SIGNUP_SCHEMA}>
//             {()=> (
//                 <Form>
//                     <Field key={index} name={fields.name}>
//                         {fieldProps => <Input {...fields}{...fieldProps}/>}
//                     </Field>
//                     ))}
//                     <button type='submit'>Sign up</button>
//                 </Form>
//             )}
//         </Formik>
//     );
// }

// export default SignUpForm
