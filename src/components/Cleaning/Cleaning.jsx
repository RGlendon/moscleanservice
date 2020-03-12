import React from "react";
import styles from "./Cleaning.module.css"
import {NavLink, Route} from "react-router-dom";
import OtherComponents from "../OtherСomponents/OtherComponents";

const Cleaning = (props) => {
    // debugger
    return (
        <div className={styles.size}>
            <div className={styles.section1}>картинка УБОРКА</div>
            <div className={styles.menu}>
                <span><NavLink to="/cleaning/appart" className={styles.link} activeClassName={styles.link_active}>Квартира</NavLink></span>
                <span><NavLink to="/cleaning/home" className={styles.link} activeClassName={styles.link_active}>Дом</NavLink></span>
                <span><NavLink to="/cleaning/office" className={styles.link} activeClassName={styles.link_active}>Офис</NavLink></span>
            </div>
            <Route exact path='/cleaning/appart' render={() => <div className={styles.sectionAppart}>Квартира</div>}/>
            <Route exact path='/cleaning/home' render={() => <div className={styles.sectionHome}>Дом</div>}/>
            <Route exact path='/cleaning/office' render={() => <div className={styles.sectionOffice}>Офис</div>}/>

            <OtherComponents/>
        </div>
    );
}

export default Cleaning;