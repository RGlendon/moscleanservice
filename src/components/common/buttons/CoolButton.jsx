import React, {useState} from "react";
import styles from "./CoolButton.module.css"

const CoolButton = (props) => {
    let styleSize = '';
    let styleGeneral = '';
    let styleHover = '';

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

    switch (props.color) {
        case 'green':
            styleGeneral = styles.generalGreen;
            styleHover = styles.isHoverGreen;
            break;
        case 'light':
            styleGeneral = styles.generalLight;
            styleHover = styles.isHoverLight;
            break;
        default:
            styleGeneral = styles.generalGreen;
            styleHover = styles.isHoverGreen;
            break;
    }


    let [isHover, setHover] = useState(false);

    return (
        <button onMouseOver={() => {setHover(true)}}
                onMouseOut={() => {setHover(false)}}
                onClick={props.onClick}
                className={`${styles.general} ${styleGeneral} ${styleSize} ${isHover && styleHover}`}
                disabled={props.isDisabled}
        >{props.text}
        </button>
    );
};

export default CoolButton;