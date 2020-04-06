import React from "react";
import CoolButton from "../../common/buttons/CoolButton";
import styles from "./PopupMoreAboutFurnitureInfo.module.css";




let PopupMoreAboutFurnitureInfo = (props) => {

    return (
        <div className={styles.common}>
            <h1 className={styles.title}>Что входит в услугу</h1>

            <h2 className={styles.subtitle}>В комнатах</h2>
            <ul className={styles.description}>
                <li>Отмываем полы</li>
                <li>Натирание зеркал и стеклянных поверхностей</li>
                <li>Протирается бытовая техника</li>
                <li>Полировка мебели снаружи</li>
                <li>Вынос мусора и замена мусорных пакетов</li>
                <li>Моются подоконники</li>
            </ul>

            <h2 className={styles.subtitle}>Ванная и туалет</h2>
            <ul className={styles.description}>
                <li>Влажная мойка полов</li>
                <li>Дезинфекция смесителей, раковин, унитазов</li>
                <li>Моется поддон душевой кабины (ванна)</li>
                <li>Отмывается кафель от пола до потолка</li>
            </ul>

            <h2 className={styles.subtitle}>Кухня</h2>
            <ul className={styles.description}>
                <li>Моются полы и плинтуса</li>
                <li>Мойка грязной посуды (20 минут)</li>
                <li>Кухонной плиты, удаление следов жира</li>
                <li>Полируются зеркала и стёкла</li>
                <li>Протираются столешницы и барные стойки</li>
                <li>Моются холодильник, СВЧ и духовка снаружи</li>
            </ul>

            <div className={styles.button}>
                <CoolButton onClick={props.update} size={'middle'} text={'Заказать услугу'}/>
            </div>
        </div>
    );
};



export default PopupMoreAboutFurnitureInfo;