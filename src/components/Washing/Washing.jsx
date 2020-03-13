import React from "react";
import styles from "./Washing.module.css"
import {NavLink, Route} from "react-router-dom";
import OtherComponents from "../OtherСomponents/OtherComponents";
import SectionOneAdd from "../SectionOneAdd/SectionOneAdd";
import firstBg from "../../assets/images/sectionOneBgWashing.jpg";
import SectionTwoAddWindowPlast from "../SectionTwoAdd/pages/SectionTwoAddWindowPlast";
import SectionTwoAddWindowWood from "../SectionTwoAdd/pages/SectionTwoAddWindowWood";
import SectionTwoAddBalcony from "../SectionTwoAdd/pages/SectionTwoAddBalcony";

const Washing = (props) => {
    // debugger
    return (
        <div className={styles.size}>
            <SectionOneAdd title={'Мытье'} background={firstBg}/>
            <div className={styles.menu}>
                <span><NavLink to="/washing/windowplast" className={styles.link} activeClassName={styles.link_active}>Пластиковые окна</NavLink></span>
                <span><NavLink to="/washing/windowwood" className={styles.link} activeClassName={styles.link_active}>Деревянные окна</NavLink></span>
                <span><NavLink to="/washing/balcony" className={styles.link} activeClassName={styles.link_active}>Балкон</NavLink></span>
            </div>
            <Route exact path='/washing/windowplast' render={() => <SectionTwoAddWindowPlast/>}/>
            <Route exact path='/washing/windowwood' render={() => <SectionTwoAddWindowWood/>}/>
            <Route exact path='/washing/balcony' render={() => <SectionTwoAddBalcony/>}/>

            <OtherComponents/>
        </div>
    );
}

export default Washing;