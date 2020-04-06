import React from "react";
import styles from "./SectionTwoCarpet.module.css";
import Card from "../Card/Card";

import image from "../../../assets/images/s2carpet.jpg";

import carpet from "../../../assets/iconsTwo/carpet/carpet.svg";
import carpet2 from "../../../assets/iconsTwo/carpet/carpet2.svg";




const SectionTwoAddCarpet = (props) => {

    return (
        <section className={styles.common}>
            <div className={styles.gridContainer}>
                <Card icon={carpet} price={'от 200 ₽ / м²'} title={'Ковер с малым ворсом 0,5 см'}/>
                <Card icon={carpet} price={'от 250 ₽ / м²'} title={'Ковер со средним ворсом до 1 см'}/>
                <Card icon={carpet2} price={'от 180 ₽ / м²'} title={'Ковролин'}/>
            </div>
            <img className={styles.img} src={image} alt="картинка"/>
        </section>
    );
};

export default SectionTwoAddCarpet;