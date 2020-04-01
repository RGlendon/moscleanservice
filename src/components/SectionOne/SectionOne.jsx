import React from "react";
import styles from "./SectionOne.module.css";
import GreenButton from "../common/buttons/GreenButton";
import Scroll from "../common/Scroll/Scroll";

const SectionOne = (props) => {
    let title = props.title;
    let URL = props.background;

    return (
        <div className={styles.wrapper} style={{backgroundImage: `url(${URL})`}} >
            <div className={styles.inner}>
                <p className={styles.copy}>MosCleanService &copy;</p>
                <h1 className={styles.tagline}>{`${title} - `}<br/>{` не ваша забота`}</h1>
                <GreenButton text={'Заказать услугу'}/>
                <div className={styles.pipka}>
                    <Scroll/>
                </div>
            </div>

        </div>
    );
};

export default SectionOne;