import React from "react";
import styles from "./Main.module.css"
import SlideShow from "../../SlideShow/SlideShow";
import OurServices from "../../OurServices/OurServices";
import Strengths from "../../Strenghts/Strengths";
import Comments from "../../Comments/Comments";
import SalesShow from "../../SalesShow/SalesShow";
import Questions from "../../Questions/Questions";


const Main = () => {
    let services = React.createRef();

    return (
        <div className={styles.general}>
            <SlideShow service={services}/>
            <OurServices service={services}/>
            <Strengths/>
            <Comments/>
            <SalesShow/>
            <Questions/>
        </div>
    );
}

export default Main;