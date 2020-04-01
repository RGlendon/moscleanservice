import React from "react";
import styles from "./Cleaning.module.css"
import {NavLink, Route} from "react-router-dom";
import OtherComponents from "../OtherСomponents/OtherComponents";
import SectionOne from "../SectionOne/SectionOne";
import firstBg from "./../../assets/images/sectionOneBg.jpg";
import SectionTwoAddAppart from "../OurServices/pages/SectionTwoAddAppart";
import SectionTwoAddHome from "../OurServices/pages/SectionTwoAddHome";
import SectionTwoAddOffice from "../OurServices/pages/SectionTwoAddOffice";

const Cleaning = (props) => {
    // debugger
    return (
        <div className={styles.size}>
            <SectionOne title={'Уборка'} background={firstBg}/>
            <div className={styles.menu}>
                <span><NavLink to="/cleaning/appart" className={styles.link}
                               activeClassName={styles.link_active}>Квартира</NavLink></span>
                <span><NavLink to="/cleaning/home" className={styles.link}
                               activeClassName={styles.link_active}>Дом</NavLink></span>
                <span><NavLink to="/cleaning/office" className={styles.link}
                               activeClassName={styles.link_active}>Офис</NavLink></span>
            </div>
            <Route exact path='/cleaning/appart' render={() => <SectionTwoAddAppart/>}/>
            <Route exact path='/cleaning/home' render={() => <SectionTwoAddHome/>}/>
            <Route exact path='/cleaning/office' render={() => <SectionTwoAddOffice/>}/>

            <OtherComponents/>
        </div>
    );
}

export default Cleaning;