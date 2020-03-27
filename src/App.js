import React from 'react';
// import logo from './logo.svg';
import './assets/vendor/normalize.css';
import './assets/vendor/common.css';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {Redirect, Route} from "react-router-dom";
import DryCleaning from "./components/DryCleaning/DryCleaning";
import Cleaning from "./components/Cleaning/Cleaning";
import Washing from "./components/Washing/Washing";
import GreenButtonBig from "./components/common/buttons/GreenButtonBig";
import LightButton from "./components/common/buttons/LightButton";
import GreenButtonSmall from "./components/common/buttons/GreenButtonSmall";
import PopupExample from "./components/PopupExample/PopupExample";
import PopupOrder from "./components/PopupExample/PopupOrder";
import Calculator from "./components/Calculator/Calculator";
import SliderCarousel from "./components/SectionTwoAdd/СarouselTestRun/SliderСarousel";
import styles from "./components/SectionTwoAdd/Carouserl/SliderSwipeCarousel.module.css";
import window1 from "./assets/iconsTwo/window1.svg";
import window2 from "./assets/iconsTwo/window2.svg";
import SliderSwipeCarousel from "./components/SectionTwoAdd/Carouserl/SliderSwipeСarousel";
import SliderCarouselManager from "./components/common/SliderSwipeCarouselManager/SliderСarouselManager";
import ContainerParent from "./components/forTest/ContainerParent";
import Menu from "./components/Menu/Menu";


function App(props) {

    return (
        <div>
            <Header/>
            <Menu/>

            {/*<main className="limitations">*/}

            {/*<Route exact path='/' render={() => <Main/>}/>*/}

            {/*<Route path='/drycleaning/:path' render={() => <DryCleaningContainer/>}/>*/}
            {/*<Route exact path='/drycleaning' render={() => <Redirect to={'/drycleaning/appart'}/>}/>*/}

            {/*<Route path='/cleaning' render={() => <Cleaning/>}/>*/}
            {/*<Route exact path='/cleaning' render={() => <Redirect to={'/cleaning/furniture'}/>}/>*/}

            {/*<Route path='/washing' render={() => <Washing/>}/>*/}
            {/*<Route exact path='/washing' render={() => <Redirect to={'/washing/windowplast'}/>}/>*/}
            {/*</main>*/}


            {/*<SliderSwipeCarousel/>*/}
            <Footer/>
            {/*<Calculator/>*/}
            {/*<SliderCarousel slidesToShow={4} isInfinity={true}*/}
            {/*                responsive={[*/}
            {/*                    {breakpoint: 1024, slidesToShow: 3},*/}
            {/*                    {breakpoint: 768, slidesToShow: 2},*/}
            {/*                    {breakpoint: 375, slidesToShow: 1}*/}
            {/*                    ]}/>*/}

            {/*<SliderCarouselManager slidesToShow={4} isInfinity={true}*/}
            {/*                responsive={[*/}
            {/*                    {breakpoint: 1024, slidesToShow: 3},*/}
            {/*                    {breakpoint: 768, slidesToShow: 2},*/}
            {/*                    {breakpoint: 375, slidesToShow: 1}*/}
            {/*                    ]}/>*/}



            {/*<ContainerParent/>*/}


            {/*<PopupOrder/>*/}
            {/*<div className="uCalc_269199"></div>*/}
            {/*{*/}
            {/*    // let widgetOptions269199 = {bg_color: "transparent"};*/}
            {/*    (function () {*/}
            {/*        var a = document.createElement("script"), h = "head";*/}
            {/*        a.async = true;*/}
            {/*        a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=269199&t=" + Math.floor(new Date() / 18e5);*/}
            {/*        document.getElementsByTagName(h)[0].appendChild(a)*/}
            {/*    })()*/}
            {/*}*/}
        </div>
    );
}

export default App;
