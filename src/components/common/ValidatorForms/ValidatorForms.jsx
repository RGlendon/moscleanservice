import React from "react";
import styles from './Validators.module.css';


export const renderInput = (fieldData) => {
    // console.log(fieldData);
    // console.log(fieldData.meta);
    // {input, label, type, meta: {touched, error, warning}}
    const {input, meta, ...restProps} = fieldData;
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <input {...input}{...restProps} className={styles.input}/>
            <div>
                {hasError && <span className={styles.spanError}>{meta.error}</span> }
            </div>
        </div>
    );
}

export const renderTextarea = (fieldData) => {
    const {input, meta, ...restProps} = fieldData;
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <textarea {...input}{...restProps} className={styles.input}/>
            <div>
                {hasError && <span className={styles.spanError}>{meta.error}</span> }
            </div>
        </div>
    );
}