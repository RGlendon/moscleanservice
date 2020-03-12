import React from "react";
import styles from "./Washing.module.css"
import {NavLink, Route} from "react-router-dom";
import OtherComponents from "../OtherСomponents/OtherComponents";

const Washing = (props) => {
    // debugger
    return (
        <div className={styles.size}>
            <div className={styles.section1}>МЫТЬЕ ОКОН</div>
            <div className={styles.menu}>
                <span><NavLink to="/washing/windowplast" className={styles.link} activeClassName={styles.link_active}>Пластиковые окна</NavLink></span>
                <span><NavLink to="/washing/windowwood" className={styles.link} activeClassName={styles.link_active}>Деревянные окна</NavLink></span>
                <span><NavLink to="/washing/balcony" className={styles.link} activeClassName={styles.link_active}>Балкон</NavLink></span>
            </div>
            <Route exact path='/washing/windowplast' render={() => <div className={styles.sectionAppart}>Пластиковые окна</div>}/>
            <Route exact path='/washing/windowwood' render={() => <div className={styles.sectionHome}>Деревянные окна</div>}/>
            <Route exact path='/washing/balcony' render={() => <div className={styles.sectionOffice}>Балкон</div>}/>

            <OtherComponents/>
        </div>
    );
}

export default Washing;