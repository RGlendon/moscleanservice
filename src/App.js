import React from 'react';
// import logo from './logo.svg';
import './assets/vendor/normalize.css';
import './assets/vendor/common.css';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Pages/Main/Main";
import Footer from "./components/Footer/Footer";
import {Redirect, Route} from "react-router-dom";
import DryCleaning from "./components/Pages/DryCleaning/DryCleaning";
import Cleaning from "./components/Pages/Cleaning/Cleaning";
import Washing from "./components/Pages/Washing/Washing";

import Menu from "./components/Menu/Menu";
import {PopupboxContainer} from "./components/common/PopupConstructorNew/PopupboxContainer";



function App(props) {

    return (
        <div>
            <Header/>
            <Menu/>

            <main className="limitations">

                <Route exact path='/' render={() => <Main/>}/>

                <Route path='/drycleaning/:path' render={() => <DryCleaning/>}/>
                <Route exact path='/drycleaning' render={() => <Redirect to={'/drycleaning/furniture'}/>}/>

                <Route path='/cleaning/:path' render={() => <Cleaning/>}/>
                <Route exact path='/cleaning' render={() => <Redirect to={'/cleaning/maintenance'}/>}/>

                <Route path='/washing/:path' render={() => <Washing/>}/>
                <Route exact path='/washing' render={() => <Redirect to={'/washing/detailed'}/>}/>
            </main>

            <Footer/>

            {/*PopupboxContainer обязательный компонент. Один на все popup'ы*/}
            <PopupboxContainer/>
        </div>
    );
}

export default App;
