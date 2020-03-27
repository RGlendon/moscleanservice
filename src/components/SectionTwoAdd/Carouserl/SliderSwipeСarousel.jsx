import React, {Component} from "react";
import styles from "./SliderSwipeCarousel.module.css";
import Card from "../Card/Card";
import window1 from "../../../assets/iconsTwo/window1.svg";
import window2 from "../../../assets/iconsTwo/window2.svg";
import SliderCarouselManager from "../../common/SliderSwipeCarouselManager/SliderСarouselManager";


class SliderSwipeCarousel extends Component {
    constructor(props) {
        super(props);
        this.commonCarousel = React.createRef();
        this.containerCarousel = React.createRef();
        this.sliderCarousel = React.createRef();
        this.prevButton = React.createRef();
        this.nextButton = React.createRef();
    }

    componentDidMount() {
        this.SliderManager = new SliderCarouselManager({
            commonCarousel: this.commonCarousel.current,
            containerCarousel: this.containerCarousel.current,
            sliderCarousel: this.sliderCarousel.current,
            prevButton: this.prevButton.current,
            nextButton: this.nextButton.current,
            options: {
                isInfinity: true,
                slidesToShow: 4,
                canSwim: true,
            },
            responsive: [
                {breakpoint: 1024, slidesToShow: 3},
                {breakpoint: 768, slidesToShow: 2},
                {breakpoint: 375, slidesToShow: 1},
            ],
        });
        this.SliderManager.init();
    }

    render() {
        return (
            <div className={styles.common} ref={this.commonCarousel}>
                <div className={styles.container} ref={this.containerCarousel}>
                    <div className={styles.movingContainer} ref={this.sliderCarousel}>
                        <div className={styles.item}>
                            <Card icon={window1} price={'от 990 ₽'} title={'ПЕРВЫЙ ЭЛЕМЕНТ'}/>
                        </div>
                        <div className={styles.item}>
                            <Card icon={window2} price={'от 990 ₽'} title={'Балкон более 4-х створок'}/>
                        </div>
                        <div className={styles.item}>
                            <Card icon={window2} price={'от 990 ₽'} title={'Мойка фасадов'}/>
                        </div>
                        <div className={styles.item}>
                            <Card icon={window1} price={'от 990 ₽'} title={'Балкон до 4-х створок'}/>
                        </div>
                        <div className={styles.item}>
                            <Card icon={window2} price={'от 990 ₽'} title={'Балкон более 4-х створок'}/>
                        </div>
                        <div className={styles.item}>
                            <Card icon={window2} price={'от 990 ₽'} title={'Мойка фасадов'}/>
                        </div>
                        <div className={styles.item}>
                            <Card icon={window1} price={'от 990 ₽'} title={'Балкон до 4-х створок'}/>
                        </div>
                        <div className={styles.item}>
                            <Card icon={window2} price={'от 990 ₽'} title={'Балкон более 4-х створок'}/>
                        </div>
                        <div className={styles.item}>
                            <Card icon={window2} price={'от 990 ₽'} title={'Балкон более 4-х створок'}/>
                        </div>
                        <div className={styles.item}>
                            <Card icon={window2} price={'от 990 ₽'} title={'ПОСЛЕДНИЙ ЭЛЕМЕНТ'}/>
                        </div>
                    </div>
                </div>
                <div className={styles.arrowLeft} ref={this.prevButton}> {`<`} </div>
                <div className={styles.arrowRigth} ref={this.nextButton}> {`>`} </div>
            </div>
        );

    }
}

export default SliderSwipeCarousel;