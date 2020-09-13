import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

function Input(props){
    const{
        field,
        form,
        meta: {error, touched},
        ...restProps
    } = props;
    const isError = Boolean(touched && typeof error !=='undefined');
    const isValid = Boolean(touched && typeof error ==='undefined');

    const inputClassName = classNames(styles.field, {
        [styles.fieldError] : isError,
        [styles.fieldValid]: isValid
    });
    return(
        <label className={styles.label}>
            <input {...restProps} {...field} className={inputClassName}/>
            {isError && <span classname={styles.error}>{error}</span>}
            </label>
    );
}

export default Input
