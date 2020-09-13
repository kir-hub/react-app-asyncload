import React from 'react';
 import { useFormik } from 'formik';

 import validationSchema from './Validation'
import Input from './Input';
import styles from './Input.module.scss'
 
 const SignupForm = () => {
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
       password: '',
       confirmPassword: '',


     },
     validationSchema: validationSchema,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit} className={styles.formCont}>
       <label htmlFor="firstName">First Name</label>
       
       <Input id='firstName' name='firstName' type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName}/>

       {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
       <label htmlFor="lastName">Last Name</label>
       <Input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.lastName}
       />
       {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}
       <label htmlFor="email">Email Address</label>
       <Input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
       <label htmlFor="password">Password</label>
       <Input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.password}
       />
       {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
       <label htmlFor="confirmPassword">confirmPassword</label>
       <Input
         id="confirmPassword"
         name="confirmPassword"
         type="password"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.confirmPassword}
       />
       {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
         <div>{formik.errors.confirmPassword}</div>
       ) : null}
       <button type="submit">Submit</button>
     </form>
   );
 };

 export default SignupForm