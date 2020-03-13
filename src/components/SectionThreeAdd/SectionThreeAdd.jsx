import React from "react";
import styles from "./SectionThreeAdd.module.css";
import Card from "./Card/Card";

import clock from "./../../assets/iconsThree/Clock.svg";
import shield from "../../assets/iconsThree/Shield.svg";
import cleaner from "../../assets/iconsThree/Cleaner.svg";
import staff from "../../assets/iconsThree/Staff.svg";
import medal from "../../assets/iconsThree/Medal.svg";
import hoover from "../../assets/iconsThree/Hoover.svg";
import vacuum from "../../assets/images/sectionThreeVacuum.jpg";


const SectionThreeAdd = (props) => {

    return (
        <section className={styles.common}>
            <h3 className={styles.title}>За что наши клиенты выбирают нас</h3>
            <div className={styles.gridContainer}>
                <Card title={'Работаем 24/7'} icon={clock}
                      text={'Мы работаем круглосуточно и умеем подстраиваться под Ваши нужды'}/>
                <Card title={'Страхование'} icon={shield}
                      text={'В случае ущерба наша компания вернет вещи прежний вид или компенсирует убытки'}/>
                <Card title={'Экологичные средства'} icon={cleaner}
                      text={'Мы используем профессиональную продукцию от сертифицированных производителей'}/>
                <Card title={'Надежные мастера'} icon={staff}
                      text={'Каждый сотрудник перед началом работы проходит обучение и сдает экзамен перед тем.'}/>
                <Card title={'Гарантия качества'} icon={medal} text={'Вы сами принимаете работу нашей команды'}/>
                <Card title={'Современная техника'} icon={hoover}
                      text={'Мы используем современную уборочную технику марки Karcher'}/>
            </div>
            <img className={styles.img} src={vacuum} alt="пылесос"/>
        </section>
    );
};

export default SectionThreeAdd;