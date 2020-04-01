import React from "react";
import styles from "./Scroll.module.css";

const Scroll = (props) => {

    const handleClick = () => {
        const item = props.service.current;
        item.scrollIntoView({block: "start", behavior: "smooth"});
    };

    return (
        <div className={styles.mouseWrap} onClick={handleClick}>
            <div className={styles.mouse}>
                <span className={styles.mouseScroll}></span>
            </div>
        </div>
    );
};

export default Scroll;