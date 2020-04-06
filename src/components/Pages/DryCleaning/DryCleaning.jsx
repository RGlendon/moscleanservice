import React from "react";
import styles from "./DryCleaning.module.css"
import {Route, withRouter} from "react-router-dom";

import SectionOne from "../../SectionOne/SectionOne";
import firstBg from "../../../assets/images/s1bg1.jpg";
import s1bg2 from "../../../assets/images/s1bg2.svg";

import SectionFourAdd from "../../SectionFourAdd/SectionFourAdd";

import SectionTwoAddCarpet from "../../OurServices/pages/SectionTwoAddCarpet";



import MenuInSection from "../../MenuInSection/MenuInSection";

import SectionTwoCommon from "../../OurServices/pages/SectionTwoCommon";
import sofa from "../../../assets/iconsTwo/sofa2.svg";
import sofa3 from "../../../assets/iconsTwo/sofa3.jpg";
import stool from "../../../assets/iconsTwo/stool.svg";
import chairSofa from "../../../assets/iconsTwo/chair-sofa.svg";
import chair from "../../../assets/iconsTwo/Chair.svg";
import chairComp from "../../../assets/iconsTwo/chairComp.svg";
import chair2 from "../../../assets/iconsTwo/chair(2).svg";

import matressChild from "../../../assets/iconsTwo/matress-child.svg";
import matressSmall from "../../../assets/iconsTwo/matress-small.svg";
import matressBig from "../../../assets/iconsTwo/mattress-big.svg";

import WhatIncluded from "../../WhatIncluded/WhatIncluded";
import vacuum from "../../../assets/iconsThree/forIncluded/vacuum.svg"
import search from "../../../assets/iconsThree/forIncluded/search.svg"
import bottles from "../../../assets/iconsThree/forIncluded/bottles.svg"
import hand from "../../../assets/iconsThree/forIncluded/Hand.svg"
import bucket from "../../../assets/iconsThree/forIncluded/Bucket.svg"

import BeforeAfter from "../../BeforeAfter/BeforeAfter";
import f1 from "../../../assets/images/beforeAfter/f1.jpg"
import f2 from "../../../assets/images/beforeAfter/f2.jpg"
import f3 from "../../../assets/images/beforeAfter/f3.jpg"

import SalesShow from "../../SalesShow/SalesShow";



let DryCleaning = (props) => {
    let innerMenu = React.createRef();

    let url = props.match.params.path;

    let items = [
        {id: 1, path: 'furniture', url: '/drycleaning/furniture', title: 'Химчистка мебели'},
        {id: 2, path: 'matress', url: '/drycleaning/matress', title: 'Химчистка матрасов'},
        {id: 3, path: 'carpet', url: '/drycleaning/carpet', title: 'Химчистка ковров'},
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

    let dataForIncludedFurniture = [
        {id: 1, icon: vacuum, width: 'short', title: 'Удаление пыли (пылесос)', subtitle: 'Пылесосим обивку перед чисткой. В складках мебели обычно всегда накапливается грязь, пыль и мелкий мусор'},
        {id: 2, icon: hand, title: 'Предварительная обработка пятен', subtitle: 'Некоторые пятна со временем прочно проникают в волокна ткани и не растворяются в воде. Их мы обрабатываем предварительно перед началом чистки'},
        {id: 3, icon: search, title: 'Определение уровня загрязнений ', subtitle: 'Мастер определяет тип ткани, характер загрязнений и подбирает оптимальную безопасную для конкретно вашего дивана химию'},
        {id: 4, icon: bottles, title: 'Химчистка профессиональной химией', subtitle: 'После правильного подбора химии и растворения грязи в обивке, мастер производит чистку мебельной ткани специальными растворами'},
        {id: 5, icon: bottles, width: 'short', title: 'Подбор химии', subtitle: 'Мастер подбирает характер загрязнений и подбирает оптимальную для вашего дивана химию'},
        {id: 6, icon: bucket, title: 'Сушка дивана после химчистки', subtitle: 'Мы подсушиваем обивку. На мокрой ткани невозможно оценить качество чистки. Только убедившись в чистоте и в качестве оказанной услуги, мастер сдаёт работу клиенту '},
    ];

    let dataForIncludedMatress = [
        {id: 1, icon: bucket, width: 'short', title: 'Мытье пола и плинтусов', subtitle: 'Наши специалисты в кратчайшие сроки выполнят поставленную задачу без потери качества'},
        {id: 2, icon: bucket, width: 'short', title: 'Мытье пола и плинтусов', subtitle: 'Наши специалисты в кратчайшие сроки выполнят поставленную задачу без потери качества'},
        {id: 3, icon: bucket, width: 'short', title: 'Мытье пола и плинтусов', subtitle: 'Наши специалисты в кратчайшие сроки выполнят поставленную задачу без потери качества'},
        {id: 4, icon: bucket, width: 'short', title: 'Мытье пола и плинтусов', subtitle: 'Наши специалисты в кратчайшие сроки выполнят поставленную задачу без потери качества'},
        {id: 5, icon: bucket, width: 'short', title: 'Мытье пола и плинтусов', subtitle: 'Наши специалисты в кратчайшие сроки выполнят поставленную задачу без потери качества'},
        {id: 6, icon: bucket, width: 'short', title: 'Мытье пола и плинтусов', subtitle: 'Наши специалисты в кратчайшие сроки выполнят поставленную задачу без потери качества'},
    ];

    let dataForBeforeAfterFurniture = [
        {id: 0, image: f1},
        {id: 1, image: f2},
        {id: 2, image: f3},
    ];


    return (
        <div className={styles.common}>
            <SectionOne innerMenu={innerMenu} title={'Химчистка'} bg1={firstBg} bg2={s1bg2}/>
            <div ref={innerMenu} className={styles.innerMenu}>
                <MenuInSection url={url} items={items}/>
            </div>

            <Route exact path='/drycleaning/furniture' render={() => <SectionTwoCommon data={dataForFurniture}/>}/>
            <Route exact path='/drycleaning/matress' render={() => <SectionTwoCommon data={dataForMatress}/>}/>
            <Route exact path='/drycleaning/carpet' render={() => <SectionTwoAddCarpet/>}/>

            <div className={styles.whatIncluded}>
                <Route exact path='/drycleaning/furniture' render={() => <WhatIncluded
                    gap={'30px 45px'}
                    title={'Что входит в химчистку мебели'}
                    data={dataForIncludedFurniture}/>}/>
                <Route exact path='/drycleaning/matress' render={() => <WhatIncluded
                    title={'Что входит в химчистку матрасов'}
                    data={dataForIncludedMatress}/>}/>
                <Route exact path='/drycleaning/carpet' render={() => <WhatIncluded
                    title={'Что входит в химчистку коврового покрытия'}
                    data={dataForIncludedMatress}/>}/>
            </div>



            <BeforeAfter data={dataForBeforeAfterFurniture}/>
            <SectionFourAdd/>
            <SalesShow/>
        </div>
    );
}

export default withRouter(DryCleaning);