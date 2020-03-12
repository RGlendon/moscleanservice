import React, {useState} from "react";
import styles from "./GreenButton.module.css"

const GreenButtonSmall = (props) => {
    let [isHover, setHover] = useState(false);

    return (
        <button onMouseOver={() => {setHover(true)}}
                onMouseOut={() => {setHover(false)}}
                className={`${styles.look} ${styles.small} ${isHover && styles.isHover}`}
        >{props.text}
        </button>
    );
}

export default GreenButtonSmall;