import React from "react";
import styles from "./DryCleaning.module.css"
import {NavLink, Route, withRouter} from "react-router-dom";

import SectionOne from "../SectionOne/SectionOne";
import firstBg from "../../assets/images/sectionOneBgDryCleaning.jpg";
import fiveBg from "../../assets/images/sectionFive.jpg";
import SectionFiveAdd from "../SectionFiveAdd/SectionFiveAdd";
import SectionFourAdd from "../SectionFourAdd/SectionFourAdd";
import Strengths from "../Strenghts/Strengths";

import SectionTwoAddCarpet from "../OurServices/pages/SectionTwoAddCarpet";
import SectionTwoAddFurniture from "../OurServices/pages/SectionTwoAddFurniture";
import SectionTwoAddMatress from "../OurServices/pages/SectionTwoAddMatress";


let DryCleaning = (props) => {

    let url = props.match.params.path;

    return (
        <div className={styles.common}>
            <SectionOne title={'Химчистка'} background={firstBg}/>
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


            <Strengths/>
            <SectionFourAdd/>
            <SectionFiveAdd background={fiveBg}/>
        </div>
    );
}

export default withRouter(DryCleaning);