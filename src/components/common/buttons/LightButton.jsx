import React, {useState} from "react";
import styles from "./LightButton.module.css"

const LightButton = (props) => {
    let [isHover, setHover] = useState(false);

    return (
        <button onMouseOver={() => {setHover(true)}}
                onMouseOut={() => {setHover(false)}}
                className={`${styles.look} ${isHover && styles.isHover}`}>{props.text}
        </button>
    );
}

export default LightButton;