import React from "react";
import styles from "./SectionOneCard.module.css";
import Calculator from "../../Calculator/Calculator";


const SectionOneCard = (props) => {
    let title = props.title;
    let URL = props.background;

    return (
        <div className={styles.wrapper}>
            <div className={styles.bg} style={{backgroundImage: `url(${URL})`}} ></div>
            <div className={styles.inner}>
                <p className={styles.copy}>MosCleanService &copy;</p>
                <h1 className={styles.tagline}>{`${title} - `}<br/>{` не ваша забота`}</h1>
            </div>
            {/*<div className={styles.calculator}>*/}
            {/*    <Calculator/>*/}
            {/*</div>*/}
        </div>
    );
};

export default SectionOneCard;