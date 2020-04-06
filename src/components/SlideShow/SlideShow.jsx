import React, {Component} from "react";
import styles from "./SlideShow.module.css";
import SectionOneCard from "./SlideShowCardOne/SectionOneCard";
import image1 from "../../assets/images/Image1.jpg";
import image2 from "../../assets/images/Image2.jpg";
import image3 from "../../assets/images/image3.jpg";

import Calculator from "../Calculator/Calculator";
import Scroll from "../common/Scroll/Scroll";
import SlideManagerUpdate from "../common/SlideManagerUpdate/SlideManagerUpdate";




class SlideShow extends Component {

    constructor(props) {
        super(props);
        this.commonCarousel = React.createRef();
        this.containerCarousel = React.createRef();
        this.sliderCarousel = React.createRef();
        this.dotsCarousel = React.createRef();
    }

    componentDidMount() {
        this.SlideShowManager = new SlideManagerUpdate({
            commonCarousel: this.commonCarousel.current,
            containerCarousel: this.containerCarousel.current,
            sliderCarousel: this.sliderCarousel.current,
            dotsCarousel: this.dotsCarousel.current,
            options: {
                isInfinity: true,
                isLooped: false,
                canSwim: true,
                slidesToShow: 1,
                delay: 2000,
                speed: 1,
                direction: 'right'
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
                            <SectionOneCard title={'Уборка'} background={image1}/>
                        </div>
                        <div className={styles.item}>
                            <SectionOneCard title={'Химчистка'} background={image2}/>
                        </div>
                        <div className={styles.item}>
                            <SectionOneCard title={'Мытье'} background={image3}/>
                        </div>

                    </div>
                </div>
                <div className={styles.dots} ref={this.dotsCarousel}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                </div>
                <div className={styles.calculator}>
                    <Calculator/>
                </div>
                <div className={styles.scroll}>
                    <Scroll needToScroll={this.props.service}/>
                </div>
            </div>
        );
    }
}

export default SlideShow;