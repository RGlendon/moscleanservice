import React from "react";
import styles from "./DryCleaning.module.css"
import {NavLink, Route} from "react-router-dom";

import SectionOneAdd from "../SectionOneAdd/SectionOneAdd";
import firstBg from "../../assets/images/sectionOneBgDryCleaning.jpg";
import fiveBg from "../../assets/images/sectionFive.jpg";
import SectionFiveAdd from "../SectionFiveAdd/SectionFiveAdd";
import SectionFourAdd from "../SectionFourAdd/SectionFourAdd";
import SectionThreeAdd from "../SectionThreeAdd/SectionThreeAdd";

import SectionTwoAddCarpet from "../SectionTwoAdd/pages/SectionTwoAddCarpet";
import SectionTwoAddFurniture from "../SectionTwoAdd/pages/SectionTwoAddFurniture";
import SectionTwoAddMatress from "../SectionTwoAdd/pages/SectionTwoAddMatress";


const DryCleaning = (props) => {

    // debugger

    let url = props.match.params.path;

    return (
        <div className={styles.common}>
            <SectionOneAdd title={'Химчистка'} background={firstBg}/>
            <div className={styles.menu}  id="dry">
                <span className={`${styles.linkContainer} ${url === 'furniture' && styles.linkActive}`}>
                    <NavLink className={styles.link} to="/drycleaning/furniture">Химчистка мебели</NavLink>
                </span>
                <span className={`${styles.linkContainer} ${url === 'matress' && styles.linkActive}`}>
                    <NavLink className={styles.link} to="/drycleaning/matress">Химчистка матрасов</NavLink>
                </span>
                <span className={`${styles.linkContainer} ${url === 'carpet' && styles.linkActive}`}>
                    <NavLink className={styles.link} to="/drycleaning/carpet">Химчистка ковров</NavLink>
                </span>
                <div className={styles.lamp}></div>
            </div>
            <Route exact path='/drycleaning/furniture' render={() => <SectionTwoAddFurniture/>}/>
            <Route exact path='/drycleaning/matress' render={() => <SectionTwoAddMatress/>}/>
            <Route exact path='/drycleaning/carpet' render={() => <SectionTwoAddCarpet/>}/>


            <SectionThreeAdd/>
            <SectionFourAdd/>
            <SectionFiveAdd background={fiveBg}/>
        </div>
    );
}

export default DryCleaning;