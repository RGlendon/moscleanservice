import React, {Component} from "react";
import styles from "./MenuInSection.module.css";
import {NavLink} from "react-router-dom";

class MenuInSection extends Component {
    render() {
        return (
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
        );
    }
}

export default MenuInSection;