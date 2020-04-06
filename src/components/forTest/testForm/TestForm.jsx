import React from "react";
import CoolButton from "../../common/buttons/CoolButton";
import styles from "./../../Popups/PopupOrder/PopupOrderContent.module.css";

import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../common/ValidatorForms/validators";
import {renderInput} from "../../common/ValidatorForms/ValidatorForms";


//
// let maxLength5 = maxLength(5);

let OrderForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={renderInput} type="text" name="name" placeholder={'Ваше имя*'}/>
            </div>
            <div>
                <Field component={renderInput} type="tel" name="tel" placeholder={'Ваш номер телефона*'}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

OrderForm = reduxForm({form: 'orderForm'})(OrderForm);


const TestForm = (props) => {
    const onSubmit  = (formData) => {
        console.log(formData);
    }

  return (
      <div className={styles.common}>
          <h1 className={styles.title}>Обратный звонок</h1>
          <p className={styles.description}>Оставьте заявку и наш сотрудник свяжется с Вами в самое ближайшее время.</p>
          <OrderForm onSubmit={onSubmit}/>
          {/*<input type="text" placeholder={'Ваше имя*'} className={styles.input}/>*/}
          {/*<input type="tel" placeholder={'Ваш номер телефона*'} className={styles.input}/>*/}
          {/*<div className={styles.button}>*/}
          {/*    <GreenButton onClick={() => {props.update()}} size={'small'} text={'Оставить заявку'}/>*/}
          {/*</div>*/}
      </div>
  );
};

export default TestForm;