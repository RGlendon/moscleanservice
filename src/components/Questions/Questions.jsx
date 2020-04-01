import React from "react";
import styles from "./Questions.module.css";
import GreenButton from "../common/buttons/GreenButton";
import PopupAskButton from "../Popups/PopupAsk/PopupAskButton";


const Questions = () => {

    function opentPanel(e) {

        if (e.target.matches(`.${styles.accordion}`)) {
            e.target.classList.toggle(`${styles.active}`);

            let panel = e.target.nextElementSibling;
            // if (panel.style.display === "block") {
            //     panel.style.display = "none";
            // } else {
            //     panel.style.display = "block";
            // }
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    }

    return (
        <div className={styles.general}>
            <h2 className={styles.title}>У Вас остались вопросы?</h2>

            <div className={styles.wrapper} onClick={opentPanel}>
                <div className={styles.column}>
                    <button className={styles.accordion}>Стандартная уборка квартиры?</button>
                    <div className={styles.panel}>
                        <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores,
                            deserunt doloremque et illum impedit ipsa nostrum quam quos sequi!</p>
                    </div>

                    <button className={styles.accordion}>Стандартная уборка квартиры? 2</button>
                    <div className={styles.panel}>
                        <p className={styles.content}>Lorem ipsum...</p>
                    </div>

                    <button className={styles.accordion}>Стандартная уборка квартиры? 3</button>
                    <div className={styles.panel}>
                        <p className={styles.content}>Lorem ipsum...</p>
                    </div>
                </div>
                <div className={styles.column}>
                    <button className={styles.accordion}>Стандартная уборка квартиры? 4</button>
                    <div className={styles.panel}>
                        <p className={styles.content}>Lorem ipsum...</p>
                    </div>

                    <button className={styles.accordion}>Стандартная уборка квартиры? 5</button>
                    <div className={styles.panel}>
                        <p className={styles.content}>Lorem ipsum...</p>
                    </div>

                    <button className={styles.accordion}>Стандартная уборка квартиры? 6</button>
                    <div className={styles.panel}>
                        <p className={styles.content}>Lorem ipsum...</p>
                    </div>
                </div>
            </div>
            <div className={styles.wrapperMore}>
                <p className={styles.addText}>Остались вопросы? Задайте их прямо сейчас!</p>
                <PopupAskButton/>
            </div>
        </div>
    );
};


export default Questions;