import React from 'react';
 import { useFormik } from 'formik';
 import validationSchema from './Validation'
 import styles from './Input.module.scss'


 const InputfirstName = (props) => {

    

  const {
    id,
    name,
    type,
    onChange,
    onBlur,
    value,
  } = props


  return (
    <>
       <label htmlFor="firstName"> </label>

       <input className={styles.inputForm}
         id={id}
         name={name}
         type={type}
         onChange={onChange}
         onBlur={onBlur}
         value={value}
       />

       
       
       </>
  );

}
export default InputfirstName;