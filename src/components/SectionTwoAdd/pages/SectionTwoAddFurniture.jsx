import React from "react";
import styles from "./../SectionTwoAdd.module.css";
import Card from "../Card/Card";

import sofa from "../../../assets/iconsTwo/sofa2.svg";
import sofa3 from "../../../assets/iconsTwo/sofa3.svg";
import stool from "../../../assets/iconsTwo/stool.svg";
import chairSofa from "../../../assets/iconsTwo/chair-sofa.svg";
import chair from "../../../assets/iconsTwo/Chair.svg";
import chairComp from "../../../assets/iconsTwo/chairComp.svg";
import chair2 from "../../../assets/iconsTwo/chair(2).svg";





const SectionTwoAddFurniture = (props) => {

    return (
        <section className={styles.common}>
            <div className={styles.gridContainer}>
                <Card icon={sofa} price={'от 990 ₽'} title={'Диван прямой 2-местный*'}/>
                <Card icon={sofa3} price={'от 990 ₽'} title={'Диван прямой 3-местный*'}/>
                <Card icon={sofa3} price={'от 990 ₽'} title={'Диван П-образный*'}/>
                <Card icon={sofa3} price={'от 990 ₽'} title={'Диван угловой 4-местный*'}/>
                <Card icon={sofa3} price={'от 990 ₽'} title={'Диван угловой 5-местный*'}/>

                <Card icon={stool} price={'от 990 ₽'} title={'Стул без спинки'}/>
                <Card icon={chairSofa} price={'от 990 ₽'} title={'Кресло - кровать'}/>
                <Card icon={chair} price={'от 990 ₽'} title={'Кресло'}/>
                <Card icon={chairComp} price={'от 990 ₽'} title={'Компьютерное кресло'}/>
                <Card icon={chair2} price={'от 990 ₽'} title={'Стул со спинкой'}/>
            </div>
            {/*<img className={styles.img} src={image} alt="картинка"/>*/}
        </section>
    );
};

export default SectionTwoAddFurniture;