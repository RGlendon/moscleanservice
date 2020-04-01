import React, {Component} from "react";
import styles from "./SlideManager.module.css";



class SlideManager extends Component {
    constructor({
                    commonCarousel,
                    containerCarousel,
                    sliderCarousel,
                    dotsCarousel,
                    prevButton,
                    nextButton,
                    options: {isInfinity, slidesToShow, canSwim, delay, speed, direction},
                    responsive

                }) {
        super();
        this.commonCarousel = commonCarousel;
        this.containerCarousel = containerCarousel;
        this.sliderCarousel = sliderCarousel;
        this.dotsCarousel = dotsCarousel;
        this.prevButton = prevButton;
        this.nextButton = nextButton;
        // ============== Options ====================
        this.isInfinity = isInfinity;
        this.slidesToShow = slidesToShow ? slidesToShow : 1;
        this.canSwim = canSwim;
        this.delay = delay ? delay + speed * 1000 : 0;
        this.speed = speed;
        // this.speed = speed || speed === 0 ? speed : null;
        this.direction = direction === 'vertical' ? 'Y' : 'X';
        // ============== innerOptions ====================
        this.timerId = null;
        this.slides = sliderCarousel.children;
        this.dots = dotsCarousel ? dotsCarousel.children : null;
        this.position = 0;
        this.widthSlide = Math.floor(100 / slidesToShow);
        this.responsive = responsive;
        this.isDown = false;
        this.startX = null;
        this.scrollLeft = 0;
        this.walk = 0;
        debugger
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
        if (this.dots) {
            this.dots[0].classList.add(`${styles.activeDot}`);
            for (let i = 0; i < this.dots.length; i++) {
                this.dots[i].addEventListener('click', () => {this.currentSlide(i)})
            }
        }
        if (this.delay) {
            this.commonCarousel.addEventListener('mouseenter', (e) => {this.toggleTimer(e)});
            this.commonCarousel.addEventListener('mouseleave', (e) => {this.toggleTimer(e)});
            this.startTimer();
        }
    }

    //===============================
    startTimer = () => {
       this.timerId = setInterval(this.run, this.delay);
    };

    run = () => {
        this.position += 1;
        if (this.position > this.slides.length - this.slidesToShow) {
            this.position = 0;
        }
        this.currentSlide(this.position);
    };

    toggleTimer = (e) => {
        if (e.type === 'mouseenter') {
            this.timerId = clearTimeout(this.timerId);
        }
        if (e.type === 'mouseleave') {
            this.startTimer();
        }
    };
    //=================================
    currentSlide = (n) => {
        for (let i = 0; i < this.dots.length; i++) {
            // this.dots[i].className = this.dots[i].className.replace(` ${styles.activeDot}`, "");
            this.dots[i].classList.remove(`${styles.activeDot}`);
        }
        this.dots[n].className += ` ${styles.activeDot}`;

        this.position = n;
        // this.sliderCarousel.style.transform = `translateX(-${this.position * this.widthSlide}%)`;
        this.sliderCarousel.style.transform = `translate${this.direction}(-${this.position * this.widthSlide}%)`;
    };

    //==================================
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

    //==============================================

    addClass() {
        this.sliderCarousel.style.transition = `all ${this.speed}s`;
        this.sliderCarousel.classList.add(`${styles.slider}`);
        for (let item of this.slides) {
            item.style.flex = `0 0 ${this.widthSlide}%`;
        }
        // debugger
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
        this.sliderCarousel.style.transition = `all 0s`;

        this.isDown = true;
        this.sliderCarousel.classList.add(`${styles.active}`);
        this.startX = e.pageX + this.scrollLeft;
    };

    handleMouseLeave = () => {
        this.isDown = false;
        this.sliderCarousel.classList.remove(`${styles.active}`);
    };

    handleMouseUp = () => {
        // this.sliderCarousel.style.transition = `all ${this.speed == 0 ? .5 : this.speed}s`;
        this.sliderCarousel.style.transition = `all ${this.speed}s`;

        this.isDown = false;
        this.sliderCarousel.classList.remove(`${styles.active}`);
        this.scrollLeft = this.scrollLeft + this.walk;



        if (this.scrollLeft > 0) {
            this.position = 0;
            this.scrollLeft = 0;
            this.sliderCarousel.style.transform = `translateX(${this.scrollLeft}px)`;
        }

        if (this.walk < 0) {
            for (let i = 0; i < (this.slides.length - this.slidesToShow); i++) {
                if (-this.sliderCarousel.offsetWidth * i * this.widthSlide / 100 > this.scrollLeft) {
                    this.position = i + 1;
                }
            }
            this.scrollLeft = - this.sliderCarousel.offsetWidth * this.position * this.widthSlide / 100;
            this.sliderCarousel.style.transform = `translate${this.direction}(${this.scrollLeft}px)`;
        }
        if (this.walk > 0) {
            for (let i = 0; i < (this.slides.length - this.slidesToShow); i++) {
                if (-this.sliderCarousel.offsetWidth * i * this.widthSlide / 100 > this.scrollLeft) {
                    this.position = i;
                }
            }
            this.scrollLeft = - this.sliderCarousel.offsetWidth * this.position * this.widthSlide / 100;
            this.sliderCarousel.style.transform = `translate${this.direction}(${this.scrollLeft}px)`;
        }
        // for (let i = 0; i < (this.slides.length - this.slidesToShow); i++) {
        //     if (-this.sliderCarousel.offsetWidth * i * this.widthSlide / 100 > this.scrollLeft) {
        //         this.position = i;
        //         this.sliderCarousel.style.transform = `translate${this.direction}(-${this.position * this.widthSlide}%)`;
        //     }
        // }


        // if (this.scrollLeft < -this.sliderCarousel.offsetWidth * (this.slides.length - this.slidesToShow) * this.widthSlide / 100) {
        //     this.position = this.slides.length - this.slidesToShow;
        //     this.scrollLeft = -this.sliderCarousel.offsetWidth * (this.slides.length - this.slidesToShow) * this.widthSlide / 100;
        //     this.sliderCarousel.style.transform = `translateX(${this.scrollLeft}px)`;
        // }
    };

    handleMouseMove = (e) => {
        if (!this.isDown) return;
        e.preventDefault();
        const currentX = e.pageX + this.scrollLeft;
        this.walk = currentX - this.startX;

        this.sliderCarousel.style.transform = `translateX(${this.scrollLeft + this.walk}px)`;
    };
}



export default SlideManager;