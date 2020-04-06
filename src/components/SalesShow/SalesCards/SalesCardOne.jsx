import React from "react";
import styles from "./SalesCardOne.module.css";
import CoolButton from "../../common/buttons/CoolButton";



const SalesCardOne = (props) => {
    return (
        <div className={styles.inner}>
            <p className={styles.deadline}>до 31.05.20</p>
            <p className={styles.count}>20%</p>
            <h2 className={styles.alarm}>Получи скидку* при первом заказе на любую уборку!</h2>
            <div className={styles.button}>
                <CoolButton text={'Заказать услугу'} size={'middle'}/>
            </div>
        </div>

    );
};

export default SalesCardOne;