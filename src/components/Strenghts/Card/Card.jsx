import React from "react";
import styles from "./Card.module.css";

const Card = ({text, title, icon}) => {

    return (
        <div className={styles.common}>
            <div className={styles.container}>
                <img className={styles.icon} src={icon} alt="иконка"/>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{text}</p>
            </div>
        </div>
    );
};

export default Card;