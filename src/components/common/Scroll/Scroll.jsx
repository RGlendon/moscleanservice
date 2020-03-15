import React from "react";
import styles from "./Scroll.module.css";

const Scroll = (props) => {
    // function tellMe() {
    // const item = document.getElementById('dry');
    // console.log(item);
// }
    // const refs = list.reduce((acc, value) => {
    //     acc[value.id] = React.createRef();
    //     return acc;
    // }, {});
    //
    // debugger

    const handleClick = () => {

        const item = document.getElementById('dry');
        // debugger
        item.scrollIntoView({block: "start", behavior: "smooth"});
    };

    return (
        <div className={styles.mouseWrap} onClick={handleClick}>
            <div href="#" className={styles.mouse}>
                <span className={styles.mouseScroll}></span>
            </div>
        </div>
    );
};

export default Scroll;