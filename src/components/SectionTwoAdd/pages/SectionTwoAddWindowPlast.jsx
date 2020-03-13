import React from "react";
import styles from "./../SectionTwoAdd.module.css";
import Card from "../Card/Card";

import window1 from "../../../assets/iconsTwo/window1.svg";
import window2 from "../../../assets/iconsTwo/window2.svg";
import window3 from "../../../assets/iconsTwo/windows3.svg";
import windowBalc from "../../../assets/iconsTwo/window-balc.svg";





const SectionTwoAddWindowPlast = (props) => {

    return (
        <section className={styles.common}>
            <div className={styles.gridContainer}>
                <Card icon={window1} price={'от 990 ₽'} title={'Одностворчатое окно'}/>
                <Card icon={window2} price={'от 990 ₽'} title={'Двустворчатое окно'}/>
                <Card icon={window3} price={'от 990 ₽'} title={'Трехстворчатое окно'}/>
                <Card icon={windowBalc} price={'от 990 ₽'} title={'Окно + балконная дверь (Евро)'}/>
            </div>
            {/*<img className={styles.img} src={image} alt="картинка"/>*/}
            <p className={styles.additional}>Мытье москитных сеток – <span className={styles.price}>100 ₽ /шт</span></p>
            <p className={styles.additional}>Мытье после ремонта – <span className={styles.price}>95 ₽ /м²</span></p>
            <p className={styles.additional}>Мытье панорамных окон, витрины ресторанов/магазинов/кафе – <span className={styles.price}>85 ₽ /м²</span></p>
        </section>
    );
};

export default SectionTwoAddWindowPlast;