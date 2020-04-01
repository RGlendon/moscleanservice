import React from "react";
import styles from "../OurServices.module.css";
import Card from "../Card/Card";

import matressChild from "../../../assets/iconsTwo/matress-child.svg";
import matressSmall from "../../../assets/iconsTwo/matress-small.svg";
import matressBig from "../../../assets/iconsTwo/mattress-big.svg";





const SectionTwoAddMatress = (props) => {

    return (
        <section className={styles.common}>
            <div className={styles.gridContainer}>
                <Card icon={matressChild} price={'от 990 ₽'} title={'Детский матрас (в кроватку)'}/>
                <Card icon={matressSmall} price={'от 990 ₽'} title={'Матрас (от 80 до 100 см)*'}/>
                <Card icon={matressSmall} price={'от 990 ₽'} title={'Матрас (от 120 до 140 см)*'}/>
                <Card icon={matressBig} price={'от 990 ₽'} title={'Матрас (от 160 до 190 см)*'}/>
                <Card icon={matressBig} price={'от 990 ₽'} title={'Матрас (от 190 до 220 см)*'}/>
            </div>
            {/*<img className={styles.img} src={image} alt="картинка"/>*/}
            <p className={styles.additional}>*Удаление запахов оплачивается отдельно – <span className={styles.price}>от 500 ₽</span></p>
            <p className={styles.additional}>**Удаление сложных пятен – <span className={styles.price}>от 100 ₽</span></p>
        </section>
    );
};

export default SectionTwoAddMatress;