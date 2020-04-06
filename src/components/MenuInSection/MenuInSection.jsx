import React, {Component} from "react";
import styles from "./MenuInSection.module.css";
import {NavLink} from "react-router-dom";

class MenuInSection extends Component {
    constructor(props) {
        super(props);
        this.items = this.props.items;
        this.state = {
            url: this.props.url,
        };
    }

    componentDidMount() {
        this.lamp = document.querySelector(`.${styles.lamp}`);
        this.menu = document.querySelector(`.${styles.menu}`);
        this.menuLeft = this.menu.getBoundingClientRect().left;

        this.transformLamp();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.url !== this.props.url) {
            this.setState({
                url: this.props.url,
            });
        }

        this.transformLamp();

    }

    //При загрузке страницы lamp становится криво немного, это из-за шрифта
    transformLamp = () => {
        let currentElement = document.querySelector(`.${styles.linkActive}`).firstElementChild;
        let currentElementLeft = currentElement.getBoundingClientRect().left;

        this.lamp.style.width = `${currentElement.offsetWidth}px`;
        this.lamp.style.transform = `translateX(${currentElementLeft - this.menuLeft}px)`;

    };


    render() {

        let menuItems = this.items.map(item => (
            <span key={item.id} className={`${styles.linkContainer} ${this.state.url === item.path && styles.linkActive}`}>
                <NavLink className={styles.link} to={item.url}>{item.title}</NavLink>
            </span>
            )
        );

        return (
            <div className={styles.menu}>
                {/*<span className={`${styles.linkContainer} ${this.state.url === 'furniture' && styles.linkActive}`}>*/}
                {/*    <NavLink className={styles.link} to="/drycleaning/furniture">Химчистка мебели</NavLink>*/}
                {/*</span>*/}

                {menuItems}
                <div className={styles.lamp}></div>
            </div>
        );
    }
}

export default MenuInSection;