import React from "react";
import CoolButton from "../../common/buttons/CoolButton";
import styles from "./PopupAskContent.module.css";
import {renderInput, renderTextarea} from "../../common/ValidatorForms/ValidatorForms";
import {
    emailVerification,
    maxLength,
    minmaxLength,
    phoneVerification,
    required
} from "../../common/ValidatorForms/validators";
import {Field, reduxForm} from "redux-form";
import {sendAPI} from "../../api/api";
import axios from "axios";


const maxLength700 = maxLength(700);
const minmaxLength2_30 = minmaxLength(2, 30);

let AskForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form}>
            <div className={styles.inputPlace}>
                <Field component={renderInput} type="text" name="name" placeholder={'Ваше имя*'} validate={[required, minmaxLength2_30]}/>
            </div>
            <div className={styles.inputPlace}>
                <Field component={renderInput} type="tel" name="phone" placeholder={'Ваш номер телефона*'} validate={[required, phoneVerification]}/>
            </div>
            <div className={styles.inputPlace}>
                <Field component={renderInput} type="text" name="email" placeholder={'Ваш электронный адрес*'} validate={[required, emailVerification]}/>
            </div>
            <div className={styles.inputPlace}>
                <Field component={renderTextarea} type="textarea" name="question" placeholder={'Ваш вопрос'} validate={[required, maxLength700]}/>
            </div>
            <div  className={styles.button}>
                <CoolButton onClick={props.close} isDisabled={props.invalid} size={'middle'} text={'Задать вопрос'}/>
            </div>
        </form>
    );
};

AskForm = reduxForm({form: 'askForm'})(AskForm);


const PopupAskContent = (props) => {
    // const onSubmit  = (formData) => {
    //     let {name, phone} = formData;
    //     sendAPI.sendOrderForm(name, phone);
    // }

    async function onSubmit(formData) {
        // e.preventDefault();

        const {name, phone, email, question} = formData;

        const form = await axios.post('/sendAskForm', {
            name,
            phone,
            email,
            question
        })
    }

  return (
      <div className={styles.common}>
          <h1 className={styles.title}>Задайте Ваш вопрос</h1>
          <p className={styles.description}>Задайте Ваш вопрос и мы ответим на него в ближайшее время.</p>
          <AskForm onSubmit={(formData) => {onSubmit(formData); props.update()}}/>
      </div>
  );
};

export default PopupAskContent;