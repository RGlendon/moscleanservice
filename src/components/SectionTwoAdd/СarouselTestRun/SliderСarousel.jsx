import React, {Component} from "react";
import styles from "./SliderCarousel.module.css";
import Card from "../Card/Card";
import window1 from "../../../assets/iconsTwo/window1.svg";
import window2 from "../../../assets/iconsTwo/window2.svg";


class SliderCarousel extends Component {
    constructor(props) {
        super(props);
        this.slider = null;
        this.isDown = false;
        this.startX = null;
        this.scrollLeft = 0;
        this.walk = 0;
        // ==================================
        this.slider = React.createRef();
        this.main = React.createRef();
        this.prev = React.createRef();
        this.next = React.createRef();
        this.isInfinity = this.props.isInfinity || false;
        this.slidesToShow = this.props.slidesToShow;
        this.slides = null;
        this.options = {
            position: 0,
            widthSlide: Math.floor(100 / this.slidesToShow),
        };
        this.responsive = this.props.responsive || null;
    }


    componentDidMount() {
        this.slider = this.slider.current;
        this.slides = this.slider.children;
        this.addClass();
        if (this.responsive) {
            this.responseInit();
        }
    }

    prevSlide = () => {
        if (this.isInfinity || this.options.position > 0) {
            --this.options.position;
            console.log(this.options.position);
            if (this.options.position < 0) {
                this.options.position = this.slides.length - this.slidesToShow;
            }
            this.slider.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            this.scrollLeft = -this.slider.offsetWidth * this.options.position * this.options.widthSlide / 100;
        }
    };

    nextSlide = () => {
        if (this.isInfinity || this.options.position < this.slides.length - this.slidesToShow) {
            ++this.options.position;
            console.log(this.options.position);
            if (this.options.position > this.slides.length - this.slidesToShow) {
                this.options.position = 0;
            }
            this.slider.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            this.scrollLeft = -this.slider.offsetWidth * this.options.position * this.options.widthSlide / 100;
        }
    };

    addClass() {
        // this.main.current.classList.add(styles.gloMain);
        // this.container.current.classList.add(`${styles.gloContainer}`);
        for (let item of this.slides) {
            item.style.flex = `0 0 ${this.options.widthSlide}%`;
            // item.classList.add(`${styles.gloItem}`);
        }
    }

    responseInit() {
        const slidesToShowDefault = this.slidesToShow;
        const allRespone = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allRespone);

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;

            if (widthWindow < maxResponse) {
                for (let i = 0; i < allRespone.length; i++) {
                    if (widthWindow < allRespone[i]) {
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                        this.addClass();
                    }
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                this.addClass();
            }
        };

        checkResponse();
        window.addEventListener('resize', checkResponse);
    }

    //==================================================
    handleMouseDown = (e) => {
        this.isDown = true;
        this.slider.classList.add(`${styles.active}`);
        this.startX = e.pageX + this.scrollLeft;
    };

    handleMouseLeave = () => {
        this.isDown = false;
        this.slider.classList.remove(`${styles.active}`);
    };

    handleMouseUp = () => {
        this.isDown = false;
        this.slider.classList.remove(`${styles.active}`);
        this.scrollLeft = this.scrollLeft + this.walk;

        for (let i = 0; i < (this.slides.length - this.slidesToShow); i++) {
            if (-this.slider.offsetWidth * i * this.options.widthSlide / 100 > this.scrollLeft) {
                this.options.position = i;
            }
            // console.log(this.options.position)
        }

        if (this.scrollLeft > 0) {
            this.options.position = 0;
            this.scrollLeft = 0;
            this.slider.style.transform = `translateX(${this.scrollLeft}px)`;
        }
        if (this.scrollLeft < -this.slider.offsetWidth * (this.slides.length - this.slidesToShow) * this.options.widthSlide / 100) {
            this.options.position = this.slides.length - this.slidesToShow;
            this.scrollLeft = -this.slider.offsetWidth * (this.slides.length - this.slidesToShow) * this.options.widthSlide / 100;
            this.slider.style.transform = `translateX(${this.scrollLeft}px)`;
        }
    };

    handleMouseMove = (e) => {
        if (!this.isDown) return;
        e.preventDefault();
        const currentX = e.pageX + this.scrollLeft;
        this.walk = currentX - this.startX;

        this.slider.style.transform = `translateX(${this.scrollLeft + this.walk}px)`;
    };

    render() {
        return (
            <div className={styles.common} ref={this.main}>
                <div className={styles.container}>
                    <div className={styles.movingContainer} ref={this.slider} id="slider"
                         onMouseDown={this.handleMouseDown}
                         onMouseLeave={this.handleMouseLeave}
                         onMouseUp={this.handleMouseUp}
                         onMouseMove={this.handleMouseMove}>
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
                <div className={styles.arrowLeft} ref={this.prev} onClick={this.prevSlide}> {`<`} </div>
                <div className={styles.arrowRigth} ref={this.next} onClick={this.nextSlide}> {`>`} </div>
            </div>
        );
    }
}

export default SliderCarousel;