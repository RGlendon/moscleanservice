import React, {Component} from "react";
import styles from "./SalesShow.module.css";
import SectionFiveCard from "./SalesShowCardFive/SectionFiveCard";
import image1 from "../../assets/images/5th1.jpg";
import image2 from "../../assets/images/5th2.jpg";
import image3 from "../../assets/images/5th3.jpg";

import SalesCardOne from "./SalesCards/SalesCardOne";
import SlideManager from "../common/SlideManager/SlideManager";




class SalesShow extends Component {
    constructor(props) {
        super(props);
        this.commonCarousel = React.createRef();
        this.containerCarousel = React.createRef();
        this.sliderCarousel = React.createRef();
        this.dotsCarousel = React.createRef();
    }

    componentDidMount() {
        this.SlideShowManager = new SlideManager({
            commonCarousel: this.commonCarousel.current,
            containerCarousel: this.containerCarousel.current,
            sliderCarousel: this.sliderCarousel.current,
            dotsCarousel: this.dotsCarousel.current,
            options: {
                isInfinity: true,
                slidesToShow: 1,
                delay: 2000,
                speed: 1,
                direction: 'vertical'
            },
        });
        this.SlideShowManager.init();
    }

    render() {
        return (
            <div className={styles.common} ref={this.commonCarousel}>
                <div className={styles.container} ref={this.containerCarousel}>
                    <div className={styles.movingContainer} ref={this.sliderCarousel}>
                        <div className={styles.item}>
                            <SectionFiveCard background={image1} salesCard={<SalesCardOne/>}/>
                        </div>
                        <div className={styles.item}>
                            <SectionFiveCard background={image2} salesCard={<SalesCardOne/>}/>
                        </div>
                        <div className={styles.item}>
                            <SectionFiveCard background={image3} salesCard={<SalesCardOne/>}/>
                        </div>

                    </div>
                </div>
                <div className={styles.dots} ref={this.dotsCarousel}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                </div>
            </div>
        );

    }
}

export default SalesShow;