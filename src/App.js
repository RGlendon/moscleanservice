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


function App() {
    return (
        <div className="App">
            <Header/>
            <GreenButtonBig text={'Заказать услугу'}/>
            <LightButton text={'Полный список'}/>
            <GreenButtonSmall text={'Заказать'}/>
            {/*<main>*/}
            {/*    <Route exact path='/' render={() => <Main/>}/>*/}
            {/*    <Route path='/drycleaning' render={() => <DryCleaning/>}/>*/}
            {/*    <Route exact path='/drycleaning' render={() => <Redirect to={'/drycleaning/appart'}/>}/>*/}

            {/*    <Route path='/cleaning' render={() => <Cleaning/>}/>*/}
            {/*    <Route exact path='/cleaning' render={() => <Redirect to={'/cleaning/furniture'}/>}/>*/}

            {/*    <Route path='/washing' render={() => <Washing/>}/>*/}
            {/*    <Route exact path='/washing' render={() => <Redirect to={'/washing/windowplast'}/>}/>*/}
            {/*</main>*/}

            {/*<Footer/>*/}
        </div>
    );
}

export default App;
