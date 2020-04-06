import React from "react";
import styles from "./Cleaning.module.css"
import {NavLink, Route, withRouter} from "react-router-dom";

import SectionOne from "../SectionOne/SectionOne";
import firstBg from "../../assets/images/Image1.jpg";
import s1bg2 from "../../assets/images/s1bg2Cleaning.svg";

import SectionFourAdd from "../SectionFourAdd/SectionFourAdd";

import SectionTwoAddCarpet from "../OurServices/pages/SectionTwoAddCarpet";



import MenuInSection from "../MenuInSection/MenuInSection";

import SectionTwoCommon from "../OurServices/pages/SectionTwoCommon";
import sofa from "../../assets/iconsTwo/sofa2.svg";
import sofa3 from "../../assets/iconsTwo/sofa3.jpg";
import stool from "../../assets/iconsTwo/stool.svg";
import chairSofa from "../../assets/iconsTwo/chair-sofa.svg";
import chair from "../../assets/iconsTwo/Chair.svg";
import chairComp from "../../assets/iconsTwo/chairComp.svg";
import chair2 from "../../assets/iconsTwo/chair(2).svg";

import matressChild from "../../assets/iconsTwo/matress-child.svg";
import matressSmall from "../../assets/iconsTwo/matress-small.svg";
import matressBig from "../../assets/iconsTwo/mattress-big.svg";

import WhatIncluded from "../WhatIncluded/WhatIncluded";
import bucket from "./../../assets/iconsThree/forIncluded/Bucket.svg";
import hand from "./../../assets/iconsThree/forIncluded/Hand.svg";
import cleaner from "./../../assets/iconsThree/forIncluded/Cleaner.svg";
import garbage from "./../../assets/iconsThree/forIncluded/garbage.svg";
import vacuum from "./../../assets/iconsThree/forIncluded/vacuum.svg";
import dishes from "./../../assets/iconsThree/forIncluded/dishes.svg";



import BeforeAfter from "../BeforeAfter/BeforeAfter";
import m1 from "./../../assets/images/beforeAfter/m1.jpg"
import m2 from "./../../assets/images/beforeAfter/m2.jpg"


import SalesShow from "../SalesShow/SalesShow";
import CalculatorOnPage from "../CalculatorOnPage/CalculatorOnPage";
import BeforeAfterSmall from "../BeforeAfter/BeforeAfterSmall/BeforeAfterSmall";



let DryCleaning = (props) => {
    let innerMenu = React.createRef();

    let url = props.match.params.path;

    let items = [
        {id: 1, path: 'maintenance', url: '/cleaning/maintenance', title: 'Поддерживающая'},
        {id: 2, path: 'spring', url: '/cleaning/spring', title: 'Генеральная'},
        {id: 3, path: 'afterRepair', url: '/cleaning/afterRepair', title: 'После ремонта'},
    ];

    let dataForFurniture = [
        {id: 1, icon: sofa, price: 'от 990 ₽', title: 'Диван прямой 2-местный*'},
        {id: 2, icon: sofa3, price: 'от 990 ₽', title: 'Диван прямой 3-местный*'},
        {id: 3, icon: sofa3, price: 'от 990 ₽', title: 'Диван П-образный*'},
        {id: 4, icon: sofa3, price: 'от 990 ₽', title: 'Диван угловой 4-местный*'},
        {id: 5, icon: sofa3, price: 'от 990 ₽', title: 'Диван угловой 5-местный*'},
        {id: 6, icon: stool, price: 'от 990 ₽', title: 'Стул без спинки'},
        {id: 7, icon: chairSofa, price: 'от 990 ₽', title: 'Кресло - кровать'},
        {id: 8, icon: chair, price: 'от 990 ₽', title: 'Кресло'},
        {id: 9, icon: chairComp, price: 'от 990 ₽', title: 'Компьютерное кресло'},
        {id: 10, icon: chair2, price: 'от 990 ₽', title: 'Стул со спинкой'},
    ];

    let dataForMatress = [
        {id: 1, icon: matressChild, price: 'от 990 ₽', title: 'Детский матрас (в кроватку)'},
        {id: 2, icon: matressSmall, price: 'от 990 ₽', title: 'Матрас (от 80 до 100 см)*'},
        {id: 3, icon: matressSmall, price: 'от 990 ₽', title: 'Матрас (от 120 до 140 см)*'},
        {id: 4, icon: matressBig, price: 'от 990 ₽', title: 'Матрас (от 160 до 190 см)*'},
        {id: 5, icon: matressBig, price: 'от 990 ₽', title: 'Матрас (от 190 до 220 см)*'},
    ];

    let dataForIncludedMaintenance = [
        {id: 1, icon: bucket, width: 'short', title: 'Мытье пола и плинтусов', subtitle: 'Отмоем полы с помощью сертифицированных, безопасных для здоровья уборочных средств'},
        {id: 2, icon: hand, width: 'short', title: 'Полировка зеркал и стекла', subtitle: 'Наши специалисты в кратчайшие сроки выполнят поставленную задачу без потери качества'},
        {id: 3, icon: cleaner, width: 'short', title: 'Дезинфекция сантехники', subtitle: 'Специальной профессиональной химией проведем дезинфекцию сантехники'},
        {id: 4, icon: bucket, width: 'short', title: 'Протирка бытовой техники', subtitle: 'Наши специалисты в кратчайшие сроки выполнят поставленную задачу без потери качества'},
        {id: 5, icon: bucket, width: 'short', title: 'Мойка кухонной плиты', subtitle: 'Помоем поверхность кухонной плиты '},
        {id: 6, icon: garbage, width: 'short', title: 'Вынос мусора', subtitle: 'Наши специалисты в кратчайшие сроки выполнят поставленную задачу без потери качества'},
    ];

    let dataForIncludedSpringCleaning = [
        {id: 1, icon: bucket, width: 'short', title: 'Мытье пола и плинтусов', subtitle: 'Отмоем полы с помощью сертифицированных, безопасных для здоровья уборочных средств'},
        {id: 2, icon: vacuum, width: 'short', title: 'Пылесосится мягкая мебель', subtitle: 'Аккуратно пропылесосим мягкую мебель (химчистка оказывается дополнительной услугой)'},
        {id: 3, icon: hand, width: 'short', title: 'Мытье душевой кабины / ванны', subtitle: 'Тщательно отмоем ванную / душевую кабину с помощью сертифицированных уборочных средств '},
        {id: 4, icon: hand, width: 'short', title: 'Полируются зеркала и стекла', subtitle: 'Приведем в порядок все зеркальные и стеклянные поверхности мебели и аксессуаров'},
        {id: 5, icon: cleaner, width: 'short', title: 'Полировка мебели снаружи', subtitle: 'Приведем в порядок внешний вид мебели, чтобы она могла радовать Ваш взгляд как и раньше'},
        {id: 6, icon: dishes, width: 'short', title: 'Мойка грязной посуды (20 минут)', subtitle: 'Осталась грязная посуда? Мы позаботимся и об этом!'},
    ];

    let dataForIncludedAfterRepair = [
        {id: 1, icon: bucket, width: 'short', title: 'Мытье пола и плинтусов', subtitle: 'Наши специалисты в кратчайшие сроки выполнят поставленную задачу без потери качества'},
        {id: 2, icon: bucket, width: 'short', title: 'Удаление остатков цеметной пыли', subtitle: 'Наши специалисты в кратчайшие сроки выполнят поставленную задачу без потери качества'},
        {id: 3, icon: cleaner, width: 'short', title: 'Полировка мебели внутри', subtitle: 'Наши специалисты в кратчайшие сроки выполнят поставленную задачу без потери качества'},
        {id: 4, icon: hand, width: 'short', title: 'Протирка бытовой техники внутри', subtitle: 'Вымоем изнутри холодильник, микроволновку, духовку и другую технику'},
        {id: 5, icon: hand, width: 'short', title: 'Удаление остатков затирки', subtitle: 'Наши специалисты в кратчайшие сроки выполнят поставленную задачу без потери качества'},
        {id: 6, icon: bucket, width: 'short', title: 'Мойка карнизов', subtitle: 'Наши специалисты в кратчайшие сроки выполнят поставленную задачу без потери качества'},
    ];

    let dataForBeforeAfterMaintenance = [
        {id: 0, image: m1},
        {id: 1, image: m2},
    ];


    return (
        <div className={styles.common}>
            <SectionOne innerMenu={innerMenu} title={'Уборка'} bg1={firstBg} rgba={'02'} bg2={s1bg2}/>

            <div className={styles.calculator} ref={innerMenu}>
                <h2 className={styles.title}>Рассчитайте стоимость</h2>
                <MenuInSection url={url} items={items}/>
                <div className={styles.inner}>
                    <CalculatorOnPage url={url}/>
                    <div className={styles.imageContainer}>
                        <BeforeAfterSmall data={dataForBeforeAfterMaintenance}/>
                    </div>
                </div>
            </div>

            <div className={styles.whatIncluded}>
                <Route exact path='/cleaning/maintenance' render={() => <WhatIncluded
                    title={'Что входит в поддерживающую уборку'}
                    data={dataForIncludedMaintenance}/>}/>
                <Route exact path='/cleaning/spring' render={() => <WhatIncluded
                    title={'Что входит в генеральную уборку'}
                    data={dataForIncludedSpringCleaning}/>}/>
                <Route exact path='/cleaning/afterRepair' render={() => <WhatIncluded
                    title={'Что входит в уборку после ремонта'}
                    data={dataForIncludedAfterRepair}/>}/>
            </div>


            <SectionFourAdd/>
            <SalesShow/>
        </div>
    );
}

export default withRouter(DryCleaning);