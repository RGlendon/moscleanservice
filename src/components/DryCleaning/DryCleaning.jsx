import React from "react";
import styles from "./DryCleaning.module.css"
import {NavLink, Route} from "react-router-dom";
import OtherComponents from "../OtherСomponents/OtherComponents";
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
    return (
        <div className={styles.size}>
            <SectionOneAdd title={'Химчистка'} background={firstBg}/>
            <div className={styles.menu}>
                <span><NavLink to="/drycleaning/furniture" className={styles.link}
                               activeClassName={styles.link_active}>Мебель</NavLink></span>
                <span><NavLink to="/drycleaning/matress" className={styles.link}
                               activeClassName={styles.link_active}>Матрац</NavLink></span>
                <span><NavLink to="/drycleaning/carpet" className={styles.link}
                               activeClassName={styles.link_active}>Ковер</NavLink></span>
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