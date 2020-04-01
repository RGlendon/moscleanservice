import React from "react";
import styles from "./SectionFiveAdd.module.css";
import GreenButton from "../common/buttons/GreenButton";
import Scroll from "../common/Scroll/Scroll";

const SectionFiveAdd = (props) => {
    let title = props.title;
    let URL = props.background;

    return (
        <div className={styles.wrapper} style={{backgroundImage: `url(${URL})`}}>
            <div className={styles.inner}>
                <p className={styles.deadline}>до 31.05.20</p>
                {/*<div>*/}
                    <p className={styles.count}>20%</p>
                    <h2 className={styles.alarm}>Получи скидку* при первом заказе на любую уборку!</h2>
                {/*</div>*/}
                <div className={styles.button}>
                    <GreenButton text={'Заказать услугу'}/>
                </div>
            </div>

        </div>
    );
};

export default SectionFiveAdd;