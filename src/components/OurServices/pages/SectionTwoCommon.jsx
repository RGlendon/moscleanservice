import React from "react";
import styles from "./SectionTwo.module.css";
import Card from "../Card/Card";



const SectionTwoCommon = (props) => {

    let cards = props.data.map(({id, icon, price, title}) => (
        <Card key={id} icon={icon} price={price} title={title}/>
        )
    );

    return (
        <section className={styles.common}>
            <div className={styles.gridContainer}>
                {cards}
            </div>

        </section>
    );
};

export default SectionTwoCommon;