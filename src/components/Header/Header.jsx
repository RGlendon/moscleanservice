import React from "react";
import styles from "./Header.module.css"
import logo from "../../assets/Logo.svg";
import {NavLink} from "react-router-dom";
import {toggleMenu} from "../../redux/commonReducer";
import {compose} from "redux";
import {connect} from "react-redux";

import vk from "./../../assets/contacts/VK.svg";
import inst from "./../../assets/contacts/Inst.svg";
import station from "./../../assets/contacts/Station.svg";
import arrowDown from "./../../assets/arrowDown.svg";


const Header = (props) => {

    function openMenu() {
        props.toggleMenu(true);
    }


    return (
        <header className={styles.look}>
            <div className={styles.limitations}>
                <div className={styles.headerNav} onClick={openMenu}></div>

                <NavLink to="/" className={styles.logo}><img src={logo} alt="логотип"/></NavLink>

                <ul className={`${styles.ul} ${styles.ulOuter}`}>
                    <li className={styles.target}>Химчистка
                        <ul className={`${styles.ul} ${styles.ulInner}`}>
                            <li className={styles.direction}>Химчистка</li>
                            <li><NavLink to="/drycleaning/furniture" className={styles.link}>Химчистка мебели</NavLink>
                            </li>
                            <li><NavLink to="/drycleaning/matress" className={styles.link}>Химчистка матрасов</NavLink>
                            </li>
                            <li><NavLink to="/drycleaning/carpet" className={styles.link}>Химчистка ковров</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.target}>Уборка помещений
                        <ul className={`${styles.ul} ${styles.ulInner}`}>
                            <li className={styles.direction}>Уборка помещений</li>
                            <li><NavLink to="/cleaning/appart" className={styles.link}>Поддерживающая</NavLink></li>
                            <li><NavLink to="/cleaning/home" className={styles.link}>Генеральная</NavLink></li>
                            <li><NavLink to="/cleaning/office" className={styles.link}>После ремонта</NavLink></li>
                        </ul>
                    </li>
                    <li className={styles.target}>Мытье окон / фасадов
                        <ul className={`${styles.ul} ${styles.ulInner}`}>
                            <li className={styles.direction}>Мытье окон / фасадов</li>
                            {/*<li><NavLink to="/washing/windowplast" className={styles.link}>Пластиковые окна</NavLink></li>*/}
                            <li><NavLink to="/washing/windowwood" className={styles.link}>Мытье окон / балконов</NavLink>
                            </li>
                            <li><NavLink to="/washing/balcony" className={styles.link}>Мытье фасадов</NavLink></li>
                        </ul>
                    </li>
                </ul>

                <div className={styles.contactsWrapper}>
                    <div className={styles.contacts}>
                        <a href="#" target="_blank"><img src={vk} alt="вконтакте" className={styles.social}/></a>
                        <a href="#" target="_blank"><img src={inst} alt="инстаграм" className={styles.social}/></a>

                        <ul className={`${styles.ul} ${styles.ulOuter}`}>
                            <li className={styles.target}>
                                <div className={styles.contactsRow}>
                                    <img src={station} alt="стационарный" className={styles.phone}/>
                                    <span>+7 (495) 532 9363</span>
                                    <img src={arrowDown} alt="стрелка" className={styles.arrowDown}/>
                                </div>
                                <ul className={`${styles.ul} ${styles.ulInner} ${styles.ulInnerCorrection}`}>
                                    <li>
                                        <a href="tel: +74955329363" className={`${styles.contactsRow} ${styles.contactsRowPosition}`}>
                                            <svg className={styles.phone} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.9095 3.95888L20.5813 0.634296C20.1751 0.228097 19.6313 0 19.0563 0C18.4813 0 17.9376 0.224972 17.5313 0.634296L13.9469 4.21197C13.5407 4.61817 13.3126 5.16498 13.3126 5.73991C13.3126 6.31796 13.5376 6.85852 13.9469 7.26784L16.7469 10.0706C16.1091 11.5566 15.1926 12.9068 14.0469 14.0482C12.9001 15.2012 11.5594 16.1105 10.0719 16.7542L7.27191 13.9514C6.86565 13.5452 6.3219 13.3171 5.7469 13.3171C5.46328 13.316 5.18231 13.3716 4.92044 13.4805C4.65858 13.5894 4.42109 13.7495 4.22189 13.9514L0.634378 17.5291C0.228126 17.9353 0 18.4821 0 19.057C0 19.635 0.225001 20.1756 0.634378 20.5849L3.95939 23.9095C4.65314 24.6032 5.6094 25 6.59065 25C6.79378 25 6.99066 24.9844 7.19066 24.95C11.3282 24.2688 15.4344 22.066 18.7501 18.7539C22.0626 15.4356 24.2626 11.3298 24.9501 7.18973C25.147 6.01487 24.7532 4.80565 23.9095 3.95888ZM22.7345 6.8179C22.1251 10.5018 20.1438 14.1764 17.1594 17.1604C14.1751 20.1444 10.5032 22.1254 6.81878 22.7347C6.35628 22.8128 5.88128 22.6565 5.54377 22.3222L2.27813 19.057L5.74065 15.5918L9.48442 19.3413L9.51254 19.3695L10.1875 19.1195C12.2342 18.3671 14.0928 17.1787 15.6344 15.6367C17.1761 14.0947 18.3639 12.236 19.1157 10.1894L19.3657 9.51444L15.5907 5.74303L19.0532 2.27784L22.3188 5.54306C22.6563 5.88052 22.8126 6.35546 22.7345 6.8179Z" />
                                            </svg>
                                            <span>+7 (495) 532 9363</span>
                                            <svg className={styles.arrowLeft} viewBox="0 0 8 11" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="5.72498" y="0.224854" width="2" height="7" rx="1" transform="rotate(45 5.72498 0.224854)"/>
                                                <path d="M6.43199 8.01775C6.82252 8.40827 6.82252 9.04144 6.43199 9.43196C6.04147 9.82248 5.4083 9.82248 5.01778 9.43196L1.48225 5.89643C1.09172 5.5059 1.09172 4.87274 1.48225 4.48221C1.87277 4.09169 2.50593 4.09169 2.89646 4.48221L6.43199 8.01775Z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel: +79776007000" className={`${styles.contactsRow} ${styles.contactsRowPosition}`}>
                                            <svg className={`${styles.phone} ${styles.phoneTwo}`} viewBox="0 0 17 25" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.36214 17.8625L9.18 17.7125C9.11231 17.6652 9.03881 17.6274 8.96143 17.6L8.74286 17.5C8.54593 17.4576 8.34186 17.4663 8.14898 17.5252C7.9561 17.5841 7.78047 17.6914 7.63786 17.8375C7.5306 17.959 7.44435 18.0985 7.38286 18.25C7.29096 18.4778 7.26657 18.7284 7.31274 18.9704C7.35891 19.2124 7.47359 19.4349 7.64235 19.61C7.8111 19.785 8.02638 19.9048 8.2611 19.9542C8.49582 20.0035 8.73948 19.9803 8.96143 19.8875C9.10653 19.815 9.24134 19.7225 9.36214 19.6125C9.53063 19.4367 9.64477 19.2135 9.69016 18.971C9.73554 18.7285 9.71013 18.4776 9.61714 18.25C9.5566 18.1055 9.47009 17.974 9.36214 17.8625ZM13.3571 0H3.64286C2.67671 0 1.75014 0.395088 1.06697 1.09835C0.3838 1.80161 0 2.75544 0 3.75V21.25C0 22.2446 0.3838 23.1984 1.06697 23.9017C1.75014 24.6049 2.67671 25 3.64286 25H13.3571C14.3233 25 15.2499 24.6049 15.933 23.9017C16.6162 23.1984 17 22.2446 17 21.25V3.75C17 2.75544 16.6162 1.80161 15.933 1.09835C15.2499 0.395088 14.3233 0 13.3571 0ZM14.5714 21.25C14.5714 21.5815 14.4435 21.8995 14.2158 22.1339C13.9881 22.3683 13.6792 22.5 13.3571 22.5H3.64286C3.32081 22.5 3.01195 22.3683 2.78423 22.1339C2.5565 21.8995 2.42857 21.5815 2.42857 21.25V3.75C2.42857 3.41848 2.5565 3.10054 2.78423 2.86612C3.01195 2.6317 3.32081 2.5 3.64286 2.5H13.3571C13.6792 2.5 13.9881 2.6317 14.2158 2.86612C14.4435 3.10054 14.5714 3.41848 14.5714 3.75V21.25Z"/>
                                            </svg>
                                            <span> +7 (977) 600 7000</span>
                                            <svg className={styles.arrowLeft} viewBox="0 0 8 11" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="5.72498" y="0.224854" width="2" height="7" rx="1" transform="rotate(45 5.72498 0.224854)"/>
                                                <path d="M6.43199 8.01775C6.82252 8.40827 6.82252 9.04144 6.43199 9.43196C6.04147 9.82248 5.4083 9.82248 5.01778 9.43196L1.48225 5.89643C1.09172 5.5059 1.09172 4.87274 1.48225 4.48221C1.87277 4.09169 2.50593 4.09169 2.89646 4.48221L6.43199 8.01775Z"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
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
)(Header);