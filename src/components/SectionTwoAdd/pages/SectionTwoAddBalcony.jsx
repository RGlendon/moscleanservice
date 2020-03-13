import React from "react";
import styles from "./../SectionTwoAdd.module.css";
import Card from "../Card/Card";

import window1 from "../../../assets/iconsTwo/window1.svg";
import window2 from "../../../assets/iconsTwo/window2.svg";


import image from "../../../assets/images/Layer1-2.svg";



const SectionTwoAddBalcony = (props) => {

    return (
        <section className={styles.common}>
            <div className={styles.gridContainer}>
                <Card icon={window1} price={'от 990 ₽'} title={'Балкон до 4-х створок'}/>
                <Card icon={window2} price={'от 990 ₽'} title={'Балкон более 4-х створок'}/>
                <Card icon={window2} price={'от 990 ₽'} title={'Мытье фасадов'}/>
            </div>
            <img className={styles.img} src={image} alt="картинка"/>
            <p className={styles.additional}>Мытье москитных сеток – <span className={styles.price}>100 ₽ /шт</span></p>
            <p className={styles.additional}>Мытье после ремонта – <span className={styles.price}>95 ₽ /м²</span></p>
            <p className={styles.additional}>Мытье панорамных окон, витрины ресторанов/магазинов/кафе – <span className={styles.price}>85 ₽ /м²</span></p>
        </section>
    );
};

export default SectionTwoAddBalcony;