import React from "react";
import styles from "./SectionOne.module.css";
import CoolButton from "../common/buttons/CoolButton";
import Scroll from "../common/Scroll/Scroll";

const SectionOne = (props) => {
    let title = props.title;
    let URL = props.bg1;
    let rgba = '';
    let urlBg2 = props.bg2;

    switch (props.rgba) {
        case '02':
            rgba = styles.rgba02;
            break;
        default:
            rgba = '';
            break;
    }

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.bg} ${rgba}`} style={{backgroundImage: `url(${URL})`}}></div>
            <img className={styles.bg2} src={urlBg2} alt="картинка"/>

            <div className={styles.inner}>
                <p className={styles.copy}>MosCleanService &copy;</p>
                <h1 className={styles.tagline}>{`${title} - `}<br/>{` не ваша забота`}</h1>
                <CoolButton size={'middle'} text={'Заказать химчистку'}/>
                <div className={styles.pipka}>
                    <Scroll needToScroll={props.innerMenu}/>
                </div>
            </div>

        </div>
    );
};

export default SectionOne;