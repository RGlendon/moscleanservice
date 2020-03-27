import React, {Component} from "react";
import styles from "./SliderCarouselManager.module.css";
// import Card from "../Card/Card";
import window1 from "../../../assets/iconsTwo/window1.svg";
import window2 from "../../../assets/iconsTwo/window2.svg";
import Card from "../../SectionTwoAdd/Card/Card";


class SliderCarouselManager extends Component {
    constructor({
                    commonCarousel,
                    containerCarousel,
                    sliderCarousel,
                    prevButton,
                    nextButton,
                    options: {isInfinity, slidesToShow, canSwim},
                    responsive

                }) {
        super();
        this.commonCarousel = commonCarousel;
        this.containerCarousel = containerCarousel;
        this.sliderCarousel = sliderCarousel;
        this.prevButton = prevButton;
        this.nextButton = nextButton;
        // ============== Options ====================
        this.isInfinity = isInfinity || false;
        this.canSwim = canSwim;
        this.slidesToShow = slidesToShow;
        // ============== innerOptions ====================
        this.slides = sliderCarousel.children;
        this.position = 0;
        this.widthSlide = Math.floor(100 / slidesToShow);
        this.responsive = responsive || null;
        this.isDown = false;
        this.startX = null;
        this.scrollLeft = 0;
        this.walk = 0;
    }


    init() {
        this.addClass();
        if (this.prevButton && this.nextButton) {
            this.prevButton.addEventListener('click', () => {this.prevSlide()});
            this.nextButton.addEventListener('click', () => {this.nextSlide()});
        }
        if (this.canSwim) {
            this.sliderCarousel.addEventListener('mousedown', (e) => {this.handleMouseDown(e)});
            this.sliderCarousel.addEventListener('mouseleave', () => {this.handleMouseLeave()});
            this.sliderCarousel.addEventListener('mouseup', () => {this.handleMouseUp()});
            this.sliderCarousel.addEventListener('mousemove', (e) => {this.handleMouseMove(e)});
        }
        if (this.responsive) {
            this.responseInit();
        }
    }


    prevSlide = () => {
        if (this.isInfinity || this.position > 0) {
            --this.position;

            if (this.position < 0) {
                this.position = this.slides.length - this.slidesToShow;
            }
            this.sliderCarousel.style.transform = `translateX(-${this.position * this.widthSlide}%)`;
            this.scrollLeft = -this.sliderCarousel.offsetWidth * this.position * this.widthSlide / 100;
        }
    };

    nextSlide = () => {
        if (this.isInfinity || this.position < this.slides.length - this.slidesToShow) {
            ++this.position;

            if (this.position > this.slides.length - this.slidesToShow) {
                this.position = 0;
            }
            this.sliderCarousel.style.transform = `translateX(-${this.position * this.widthSlide}%)`;
            this.scrollLeft = -this.sliderCarousel.offsetWidth * this.position * this.widthSlide / 100;
        }
    };

    addClass() {
        // debugger
        // this.main.current.classList.add(styles.gloMain);
        this.sliderCarousel.classList.add(`${styles.slider}`);
        for (let item of this.slides) {
            item.style.flex = `0 0 ${this.widthSlide}%`;
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
                        this.widthSlide = Math.floor(100 / this.slidesToShow);
                        this.addClass();
                    }
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.widthSlide = Math.floor(100 / this.slidesToShow);
                this.addClass();
            }
        };

        checkResponse();
        window.addEventListener('resize', checkResponse);
    }

    // //==================================================
    handleMouseDown = (e) => {
        this.isDown = true;
        this.sliderCarousel.classList.add(`${styles.active}`);
        this.startX = e.pageX + this.scrollLeft;
    };

    handleMouseLeave = () => {
        this.isDown = false;
        this.sliderCarousel.classList.remove(`${styles.active}`);
    };

    handleMouseUp = () => {
        this.isDown = false;
        this.sliderCarousel.classList.remove(`${styles.active}`);
        this.scrollLeft = this.scrollLeft + this.walk;

        for (let i = 0; i < (this.slides.length - this.slidesToShow); i++) {
            if (-this.sliderCarousel.offsetWidth * i * this.widthSlide / 100 > this.scrollLeft) {
                this.position = i;
            }
            // console.log(this.options.position)
        }

        if (this.scrollLeft > 0) {
            this.position = 0;
            this.scrollLeft = 0;
            this.sliderCarousel.style.transform = `translateX(${this.scrollLeft}px)`;
        }
        if (this.scrollLeft < -this.sliderCarousel.offsetWidth * (this.slides.length - this.slidesToShow) * this.widthSlide / 100) {
            this.position = this.slides.length - this.slidesToShow;
            this.scrollLeft = -this.sliderCarousel.offsetWidth * (this.slides.length - this.slidesToShow) * this.widthSlide / 100;
            this.sliderCarousel.style.transform = `translateX(${this.scrollLeft}px)`;
        }
    };

    handleMouseMove = (e) => {
        if (!this.isDown) return;
        e.preventDefault();
        const currentX = e.pageX + this.scrollLeft;
        this.walk = currentX - this.startX;

        this.sliderCarousel.style.transform = `translateX(${this.scrollLeft + this.walk}px)`;
    };
}



export default SliderCarouselManager;