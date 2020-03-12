import React from "react";
import styles from "./DryCleaning.module.css"
import {NavLink, Route} from "react-router-dom";
import OtherComponents from "../OtherСomponents/OtherComponents";

const DryCleaning = (props) => {
    // debugger
    return (
        <div className={styles.size}>
            <div className={styles.section1}> ХИМЧИСТКА</div>
            <div className={styles.menu}>
                <span><NavLink to="/drycleaning/furniture" className={styles.link} activeClassName={styles.link_active}>Мебель</NavLink></span>
                <span><NavLink to="/drycleaning/matress" className={styles.link} activeClassName={styles.link_active}>Матрац</NavLink></span>
                <span><NavLink to="/drycleaning/carpet" className={styles.link} activeClassName={styles.link_active}>Ковер</NavLink></span>
            </div>
            <Route exact path='/drycleaning/furniture' render={() => <div className={styles.sectionAppart}>Мебель</div>}/>
            <Route exact path='/drycleaning/matress' render={() => <div className={styles.sectionHome}>Матрац</div>}/>
            <Route exact path='/drycleaning/carpet' render={() => <div className={styles.sectionOffice}>Ковер</div>}/>

            <OtherComponents/>
        </div>
    );
}

export default DryCleaning;