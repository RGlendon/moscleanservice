import React from "react";
import CoolButton from "../../common/buttons/CoolButton";
import styles from "./PopupOrderFullContent.module.css";
import {renderInput} from "../../common/ValidatorForms/ValidatorForms";
import {minmaxLength, phoneVerification, required} from "../../common/ValidatorForms/validators";
import {Field, reduxForm} from "redux-form";
import {sendAPI} from "../../api/api";
import axios from "axios";
import {connect} from "react-redux";


const minmaxLength230 = minmaxLength(2, 30);

let OrderForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form}>
            <div className={styles.inputPlace}>
                <Field component={renderInput} type="text" name="name" placeholder={'Ваше имя*'} validate={[required, minmaxLength230]}/>
            </div>
            <div className={styles.inputPlace}>
                <Field component={renderInput} type="tel" name="phone" placeholder={'Ваш номер телефона*'} validate={[required, phoneVerification]}/>
            </div>
            <div  className={styles.button}>
                <CoolButton isDisabled={props.invalid} size={'middle'} text={'Оставить заявку'}/>
            </div>
        </form>
    );
};

OrderForm = reduxForm({form: 'orderForm'})(OrderForm);




let PopupOrderFullContent = (props) => {
    // const onSubmit  = (formData) => {
    //     let {name, phone} = formData;
    //     sendAPI.sendOrderForm(name, phone);
    // }
    // console.log(props.addInfo);
// debugger
    async function onSubmit(formData) {
        const {name, phone} = formData;

        const form = await axios.post('/sendOrderFormFull', {
            name,
            phone,
            typeOfWork: props.addInfo.typeOfWork,
            meters: props.addInfo.meters,
            addServices: props.addInfo.addServices,
            commonPrice: props.addInfo.commonPrice
        });
    }

  return (
      <div className={styles.common}>
          <h1 className={styles.title}>Обратный звонок</h1>
          <p className={styles.description}>Оставьте заявку и наш сотрудник свяжется с Вами в самое ближайшее время.</p>
          <OrderForm onSubmit={(formData) => {onSubmit(formData); props.update()}}/>
      </div>
  );
};

function mapStateToProps(state) {
    return {
        addInfo: state.common.addInfo,
    }
}



export default connect(mapStateToProps, null)(PopupOrderFullContent);