import React from "react";
import GreenButton from "../../common/buttons/GreenButton";
import styles from "./PopupFeedbackContent.module.css";
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

let FeedbackForm = (props) => {
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
                <Field component={renderTextarea} type="textarea" name="comment" placeholder={'Ваш отзыв'} validate={[required, maxLength700]}/>
            </div>
            <div  className={styles.button}>
                <GreenButton onClick={props.close} isDisabled={props.invalid} size={'middle'} text={'Оставить отзыв'}/>
            </div>
        </form>
    );
};

FeedbackForm = reduxForm({form: 'askForm'})(FeedbackForm);


const PopupFeedbackContent = (props) => {
    // const onSubmit  = (formData) => {
    //     let {name, phone} = formData;
    //     sendAPI.sendOrderForm(name, phone);
    // }

    async function onSubmit(formData) {
        // e.preventDefault();

        const {name, phone, email, comment} = formData;

        const form = await axios.post('/sendFeedbackForm', {
            name,
            phone,
            email,
            comment
        })
    }

  return (
      <div className={styles.common}>
          <h1 className={styles.title}>Оставьте Ваш отзыв</h1>
          <p className={styles.description}>Поделитесь Вашими впечатлениями об оказанной Вам услуге.
              Нам важны Ваши комментарии, так как мы постоянно работаем над повышением уровня сервиса</p>
          <FeedbackForm onSubmit={(formData) => {onSubmit(formData); props.update()}}/>
      </div>
  );
};

export default PopupFeedbackContent;