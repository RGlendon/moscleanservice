import React from "react";
import styles from "../OurServices.module.css";
import Card from "../Card/Card";

import image from "../../../assets/images/Layer1-2.svg";

import sofa from "../../../assets/iconsTwo/sofa2.svg";




const SectionTwoAddCarpet = (props) => {

    return (
        <section className={styles.common}>
            <div className={styles.gridContainer}>
                <Card icon={sofa} price={'от 990 ₽'} title={'Диван прямой 2-местный*'}/>
                <Card icon={sofa} price={'от 990 ₽'} title={'Диван прямой 3-местный*'}/>
                <Card icon={sofa} price={'от 990 ₽'} title={'Диван П-образный*'}/>
            </div>
            <img className={styles.img} src={image} alt="картинка"/>
        </section>
    );
};

export default SectionTwoAddCarpet;