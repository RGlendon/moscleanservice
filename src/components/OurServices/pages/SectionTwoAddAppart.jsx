import React from "react";
import styles from "../OurServices.module.css";
import Card from "../Card/Card";

import image from "../../../assets/images/Layer1-2.svg";

import clean3 from "../../../assets/iconsTwo/clean3.svg";
import bucket from "../../../assets/iconsTwo/Bucket.svg";
import paintRoller from "../../../assets/iconsTwo/PaintRoller.svg";




const SectionTwoAddAppart = (props) => {

    return (
        <section className={styles.common}>
            <div className={styles.gridContainer}>
                <Card icon={clean3} price={'от 990 ₽'} title={'Поддерживающая уборка квартиры'}/>
                <Card icon={bucket} price={'от 990 ₽'} title={'Генеральная уборка квартиры'}/>
                <Card icon={paintRoller} price={'от 990 ₽'} title={'Уборка квартиры после ремонта'}/>
            </div>
            <img className={styles.img} src={image} alt="картинка"/>
        </section>
    );
};

export default SectionTwoAddAppart;