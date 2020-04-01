import React from "react";
import styles from "./SectionFiveCard.module.css";


const SectionFiveCard = (props) => {
    let URL = props.background;

    return (
        <div className={styles.wrapper}>
            <div className={styles.bg} style={{backgroundImage: `url(${URL})`}} ></div>
            <div className={styles.inner}>
                {props.salesCard}
            </div>

        </div>
    );
};

export default SectionFiveCard;