import React from "react";
import styles from "./Washing.module.css"
import {withRouter} from "react-router-dom";

import SectionOne from "../../SectionOne/SectionOne";
import firstBg from "../../../assets/images/image3.jpg";
import s1bg2 from "../../../assets/images/s1bg2washing.svg";

import SectionFourAdd from "../../SectionFourAdd/SectionFourAdd";

import MenuInSection from "../../MenuInSection/MenuInSection";

import WhatIncluded from "../../WhatIncluded/WhatIncluded";
import bucket from "../../../assets/iconsThree/forIncluded/Bucket.svg";
import hand from "../../../assets/iconsThree/forIncluded/Hand.svg";
import cleaner from "../../../assets/iconsThree/forIncluded/Cleaner.svg";


import w1 from "../../../assets/images/beforeAfter/w1.jpg"
import w2 from "../../../assets/images/beforeAfter/w2.jpg"

import SalesShow from "../../SalesShow/SalesShow";
import CalculatorOnPage from "../../CalculatorOnPage/CalculatorOnPage";
import BeforeAfterSmall from "../../BeforeAfter/BeforeAfterSmall/BeforeAfterSmall";



let Washing = (props) => {
    let innerMenu = React.createRef();

    let url = props.match.params.path;

    let items = [
        {id: 1, path: 'detailed', url: '/washing/detailed', title: 'Детальный расчет'},
        {id: 2, path: 'singlePrice', url: '/washing/singlePrice', title: 'Единый тариф'},
    ];

    let dataForIncludedWashing = [
        {id: 1, icon: cleaner, width: 'short', title: 'Моем стекла с обеих сторон', subtitle: 'Качественно отмоем оконные стекла с обоих сторон специальными средствами, не оставляющих разводов'},
        {id: 2, icon: hand, width: 'short', title: 'Очищаем раму снаружи и внутри', subtitle: 'Удаляем загрязнения с внутренней и внешней поверхности оконной рамы'},
        {id: 3, icon: bucket, width: 'short', title: 'Моем москитные сетки', subtitle: 'Удаляем сезонную пыль и мусор с поверхности сетки'},
        {id: 4, icon: hand, width: 'short', title: 'Протираем подоконники', subtitle: 'Очищаем поверхности внутреннего и внешнего подоконника'},
    ];


    let dataForBeforeAfterMaintenance = [
        {id: 0, image: w1},
        {id: 1, image: w2},
    ];


    return (
        <div className={styles.common}>
            <SectionOne innerMenu={innerMenu} title={'Уборка'} bg1={firstBg} rgba={'02'} bg2={s1bg2}/>

            <div className={styles.calculator} ref={innerMenu}>
                <h2 className={styles.title}>Выберите удобный тариф</h2>
                <MenuInSection url={url} items={items}/>
                <div className={styles.inner}>
                    <CalculatorOnPage url={url} items={items}/>
                    <div className={styles.imageContainer}>
                        <BeforeAfterSmall data={dataForBeforeAfterMaintenance}/>
                    </div>
                </div>
            </div>

            <div className={styles.whatIncluded}>
                <WhatIncluded
                    title={'Что входит в мытье окон'}
                    data={dataForIncludedWashing}/>
            </div>


            <SectionFourAdd/>
            <SalesShow/>
        </div>
    );
}

export default withRouter(Washing);