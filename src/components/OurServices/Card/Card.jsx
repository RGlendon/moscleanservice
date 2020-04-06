import React from "react";
import styles from "./Card.module.css";
import CoolButton from "../../common/buttons/CoolButton";


const Card = ({icon, title, price}) => {

    return (
        <div className={styles.common}>
            <div className={styles.containerOne}>
                <img className={styles.icon} src={icon} alt="иконка"/>
                <h4 className={styles.title}>{title}</h4>
            </div>
            <div className={styles.containerTwo}>
                <p className={styles.price}>{price}</p>
                <CoolButton size={'small'} text={'Заказать'}/>
            </div>
        </div>
    );
};

export default Card;