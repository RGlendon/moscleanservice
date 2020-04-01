import React from "react";
import styles from "./OurServices.module.css";
import SliderSwipeCarousel from "./Carouserl/SliderSwipeСarousel";






const OurServices = (props) => {

    return (
        <section className={styles.common} ref={props.service}>
            <h3 className={styles.title}>Наши услуги</h3>
            <SliderSwipeCarousel/>
        </section>
    );
};

export default OurServices;