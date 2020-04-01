import React, {useState} from "react";
import styles from "./GreenButton.module.css"

const GreenButton = (props) => {
    let styleSize = '';

    switch (props.size) {
        case 'small':
            styleSize = styles.smallSize;
            break;
         case 'middle':
            styleSize = styles.middleSize;
            break;
        case 'big':
            styleSize = styles.bigSize;
            break;
        default:
            styleSize = styles.commonSize;
            break;
    }


    let [isHover, setHover] = useState(false);

    return (
        <button onMouseOver={() => {setHover(true)}}
                onMouseOut={() => {setHover(false)}}
                onClick={props.onClick}
                className={`${styles.general} ${styleSize} ${isHover && styles.isHover}`}
                disabled={props.isDisabled}
        >{props.text}
        </button>
    );
}

export default GreenButton;