import React from "react";
import styles from "./Scroll.module.css";

const Scroll = () => {
    return (
    <div className={styles.mouseWrap}>
        <a href="#" className={styles.mouse}>
            <span className={styles.mouseScroll}></span>
        </a>
    </div>
    );
};

export default Scroll;