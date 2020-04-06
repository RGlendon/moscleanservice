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


import PopupExample from "./components/Popups/PopupExample";
import PopupOrderButton from "./components/Popups/PopupOrder/PopupOrderButton";



import ContainerParent from "./components/forTest/ContainerParent";
import Menu from "./components/Menu/Menu";
import TestForm from "./components/forTest/testForm/TestForm";
import NewTestForm from "./components/forTest/testForm/NewTestForm";
import {PopupboxContainer} from "./components/common/PopupConstructorNew/PopupboxContainer";
import PopupAskButton from "./components/Popups/PopupAsk/PopupAskButton";
import SectionOneCard from "./components/SlideShow/SlideShowCardOne/SectionOneCard";

import SectionOne from "./components/SectionOne/SectionOne";

import SectionFiveAdd from "./components/SectionFiveAdd/SectionFiveAdd";
import SalesCardOne from "./components/SalesShow/SalesCards/SalesCardOne";
import PopupAskContent from "./components/Popups/PopupAsk/PopupAskContent";





function App(props) {

    return (
        <div>
            <Header/>
            <Menu/>

            <main className="limitations">

                <Route exact path='/' render={() => <Main/>}/>

                {/*<PopupAskContent/>*/}
                <Route path='/drycleaning/:path' render={() => <DryCleaning/>}/>
                <Route exact path='/drycleaning' render={() => <Redirect to={'/drycleaning/furniture'}/>}/>

                <Route path='/cleaning/:path' render={() => <Cleaning/>}/>
                <Route exact path='/cleaning' render={() => <Redirect to={'/cleaning/maintenance'}/>}/>

                <Route path='/washing/:path' render={() => <Washing/>}/>
                <Route exact path='/washing' render={() => <Redirect to={'/washing/detailed'}/>}/>
            </main>



            <Footer/>


            {/*<TestForm/>*/}

            {/*<ContainerParent/>*/}
            {/*<NewTestForm/>*/}
            {/*            <PopupAskButton/>*/}
            {/*            <PopupOrderButton/>*/}

            {/*<PopupOrderButton/>*/}
            {/*<PopupOrderButton/>*/}
            {/*<PopupOrderButton/>*/}
            {/*<PopupOrderButton/>*/}
            {/*<PopupOrderButton/>*/}
            {/*<div className="uCalc_269199"></div>*/}


            {/*PopupboxContainer обязательный компонент. Один на все popup'ы*/}
            <PopupboxContainer/>
        </div>
    );
}

export default App;
