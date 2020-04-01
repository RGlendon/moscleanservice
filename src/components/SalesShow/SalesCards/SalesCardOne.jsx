import React from "react";
import styles from "./SalesCardOne.module.css";
import GreenButton from "../../common/buttons/GreenButton";



const SalesCardOne = (props) => {
    return (
        <div className={styles.inner}>
            <p className={styles.deadline}>до 31.05.20</p>
            <p className={styles.count}>20%</p>
            <h2 className={styles.alarm}>Получи скидку* при первом заказе на любую уборку!</h2>
            <div className={styles.button}>
                <GreenButton text={'Заказать услугу'} size={'middle'}/>
            </div>
        </div>

    );
};

export default SalesCardOne;