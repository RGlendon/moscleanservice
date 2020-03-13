import React from "react";
import styles from "./SectionTwoAdd.module.css";
import Card from "./Card/Card";

import clean3 from "./../../assets/iconsTwo/clean3.svg";
import matressChild from "./../../assets/iconsTwo/matress-child.svg";

import shield from "../../assets/iconsThree/Shield.svg";
import cleaner from "../../assets/iconsThree/Cleaner.svg";
import staff from "../../assets/iconsThree/Staff.svg";
import medal from "../../assets/iconsThree/Medal.svg";
import hoover from "../../assets/iconsThree/Hoover.svg";
import vacuum from "../../assets/images/sectionThreeVacuum.jpg";


const SectionTwoAdd = (props) => {

    return (
        <section className={styles.common}>
            <h3 className={styles.title}>За что наши клиенты выбирают нас</h3>
            <div className={styles.gridContainer}>
                <Card icon={clean3}/>
                <Card icon={matressChild}/>

            </div>
            <img className={styles.img} src={vacuum} alt="пылесос"/>
        </section>
    );
};

export default SectionTwoAdd;