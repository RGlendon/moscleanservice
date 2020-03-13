import React, {useState} from "react";
import styles from "./Header.module.css"
import logo from "../../assets/Logo.svg";
import {NavLink} from "react-router-dom";

// var Logo = require('../../assets/Logo.svg');

const Header = () => {
    // let [test, setTest] = useState(1);
    return (
        <header className={styles.look}>
            <div className={styles.limitations}>
                <div className={styles.headerNav}></div>

                <NavLink to="/" activeClassName={styles.link_active}><img src={logo} alt="логотип"/></NavLink>


                <ul className={`${styles.ul} ${styles.ulOuter}`}>
                    <li className={styles.target}>Химчистка
                        <ul className={`${styles.ul} ${styles.ulInner}`}>
                            <li><NavLink to="/drycleaning/furniture" className={styles.link}
                                         activeClassName={styles.link_active}>Мебель</NavLink></li>
                            <li><NavLink to="/drycleaning/matress" className={styles.link}
                                         activeClassName={styles.link_active}>Матрац</NavLink></li>
                            <li><NavLink to="/drycleaning/carpet" className={styles.link}
                                         activeClassName={styles.link_active}>Ковер</NavLink></li>
                        </ul>
                    </li>
                    <li className={styles.target}>Уборка помещений
                        <ul className={`${styles.ul} ${styles.ulInner}`}>
                            <li><NavLink to="/cleaning/appart" className={styles.link}
                                         activeClassName={styles.link_active}>Квартира</NavLink></li>
                            <li><NavLink to="/cleaning/home" className={styles.link}
                                         activeClassName={styles.link_active}>Дом</NavLink></li>
                            <li><NavLink to="/cleaning/office" className={styles.link}
                                         activeClassName={styles.link_active}>Офис</NavLink></li>
                        </ul>
                    </li>
                    <li className={styles.target}>Мытье окон/фасадов
                        <ul className={`${styles.ul} ${styles.ulInner}`}>
                            <li><NavLink to="/washing/windowplast" className={styles.link}
                                         activeClassName={styles.link_active}>Пластиковые окна</NavLink></li>
                            <li><NavLink to="/washing/windowwood" className={styles.link}
                                         activeClassName={styles.link_active}>Деревянные окна</NavLink></li>
                            <li><NavLink to="/washing/balcony" className={styles.link}
                                         activeClassName={styles.link_active}>Балкон</NavLink></li>
                        </ul>
                    </li>

                </ul>
            </div>

        </header>
    );
}

export default Header;