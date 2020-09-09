import React, { Component, useState } from 'react';
import { render } from '@testing-library/react';
import styles from '../FormLogin/LoginForm.module.css';
import classnames from 'classnames';

function FormHooks() {
    let [userEmail, handleEmailChange] = useState('');
    let [userPassword, handlePasswordChange] = useState('');
    const[isPasswordValid, ]=useState(null);


const handleSubmit = (e) => {
    e.preventDefault();
    
};


const passStyleClass = classnames(styles.input, {
    [styles.inputValid]: isPasswordValid,
});


  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="email"
        name="userEmail"
        value={userEmail}
        onChange={(event)=>handleEmailChange(userEmail =  event.target.value)}
        placeholder="user email"
        className={styles.input}
      />
      <input
        type="password"
        name="userPassword"
        value={userPassword}
        onChange={(event)=>handlePasswordChange(userPassword =  event.target.value)}
        placeholder="user pass"
        className={passStyleClass}
      />
      <button type="submit" > LOGIN</button>
    </form>
  );
}

export default FormHooks;
