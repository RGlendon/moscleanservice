import React from "react";
import styles from "./WhatIncluded.module.css";

import PopupMoreAboutFurnitureButton from "../Popups/PopupMoreAboutFurniture/PopupMoreAboutFurnitureButton";




const WhatIncluded = (props) => {

    let cards = props.data.map(({id, icon, width, title, subtitle}) => (
            <div className={styles.item} key={id}>
                <img className={styles.img} src={icon} alt="иконка"/>
                <div className={styles.description}>
                    <h3 className={styles.itemTitle}>{title}</h3>
                    <p className={`${styles.subtitle} ${width === 'short' && styles.short}`}>{subtitle}</p>
                </div>
            </div>
        )
    );

    return (
        <section className={styles.common}>
            <h3 className={styles.title}>{props.title}</h3>
            <div className={styles.gridContainer} style={{gridGap: `${props.gap}`}}>
                {cards}
            </div>
            <div className={styles.button}>
                <PopupMoreAboutFurnitureButton/>
            </div>

        </section>
    );
};

export default WhatIncluded;