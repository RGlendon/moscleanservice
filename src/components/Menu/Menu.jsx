import React, {useEffect} from "react";
import styles from "./Menu.module.css";
import logoGreen from "./../../assets/logoGreen.svg";
import closeMenu from "./../../assets/closeMenu.svg";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {toggleMenu} from "../../redux/commonReducer";
import {compose} from "redux";

const Menu = (props) => {
    const layer = React.createRef();

    useEffect(() => {
        document.addEventListener('keydown', closeMenuEsc)
    }, []);

    function closeMenuEsc(e) {
        if (e.keyCode === 27) {
            props.toggleMenu(false);
        }
    }

    function clickOutside(e) {
        if (e.target === layer.current) {
            props.toggleMenu(false);
        }
    }

    return (
        <div className={`${styles.wrapper} ${props.isOpenMenu ? styles.openMenu : null}`} onClick={clickOutside}>
            <div className={styles.layer} ref={layer}></div>
            <div className={styles.container}>
                <img src={logoGreen} alt="логотип" className={styles.logoGreen}/>
                <img src={closeMenu} alt="закрыть" className={styles.closebtn} onClick={() => {
                    props.toggleMenu(false)
                }} onKeyDown={() => {
                    console.log('dfdfsdf')
                }}/>
                <menu className={styles.sidenav} onClick={() => {props.toggleMenu(false)}}>
                    <NavLink to="/drycleaning/furniture" className={styles.link}>Химчистка мебели</NavLink>
                    <NavLink to="/drycleaning/matress" className={styles.link}>Химчистка матрасов</NavLink>
                    <NavLink to="/drycleaning/carpet" className={styles.link}>Химчистка ковров</NavLink>
                    <NavLink to="#" className={styles.link}>Поддерживающая уборка</NavLink>
                    <NavLink to="#" className={styles.link}>Генеральная уборка</NavLink>
                    <NavLink to="#" className={styles.link}>Уборка после ремонта</NavLink>
                    <NavLink to="#" className={styles.link}>Мытье окон / балконов</NavLink>
                    <NavLink to="#" className={styles.link}>Мытье фасадов</NavLink>
                    <NavLink to="#" className={styles.link}>Наши цены</NavLink>
                    <NavLink to="#" className={`${styles.link} ${styles.sales}`}>Акции</NavLink>
                    <NavLink to="#" className={styles.link}>Контакты</NavLink>
                </menu>
            </div>
        </div>
    );
};


function mapStateToProps(state) {
    return {
        isOpenMenu: state.common.isOpenMenu,
    }
}

let mapDispatchToProps = {
    toggleMenu,
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Menu);
