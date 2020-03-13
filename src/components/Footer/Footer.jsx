import React from "react";
import styles from "./Footer.module.css";
import logo from "./../../assets/LogoClear.svg";
import subscribe from "./../../assets/Mosclean.svg";
import {Link, NavLink} from "react-router-dom";
import vk from "./../../assets/contacts/VK.svg";
import inst from "./../../assets/contacts/Inst.svg";
import station from "./../../assets/contacts/Station.svg";
import mobile from "./../../assets/contacts/Mobile.svg";


const Footer = () => {
    return (
        <footer className={styles.common}>
            <div className={styles.wrapper}>
                <ul className={styles.menu}>
                    {/*доработать промотку наверх при переходе*/}
                    <li className={styles.listItem}><a href="/drycleaning/furniture" className={styles.link}
                    >Химчистка</a></li>
                    <li className={styles.listItem}><NavLink to="/cleaning/appart" className={styles.link}
                                                             activeClassName={styles.link_active}>Уборка</NavLink></li>
                    <li className={styles.listItem}><NavLink to="/washing/windowplast" className={styles.link}
                                                             activeClassName={styles.link_active}>Мытье
                        окон/фасадов</NavLink></li>

                    <li className={styles.listItem}><NavLink to="#" className={styles.link}
                                                             activeClassName={styles.link_active}>Наши цены</NavLink>
                    </li>
                    <li className={styles.listItem}><NavLink to="#" className={styles.link}
                                                             activeClassName={styles.link_active}>АКЦИИ</NavLink></li>
                    <li className={styles.listItem}><NavLink to="#" className={styles.link}
                                                             activeClassName={styles.link_active}>Контакты</NavLink>
                    </li>
                    <li className={styles.listItem}><NavLink to="#" className={styles.link}
                                                             activeClassName={styles.link_active}>Политика
                        конфиденциальности</NavLink></li>
                    <li className={styles.listItem}><NavLink to="#" className={styles.link}
                                                             activeClassName={styles.link_active}>Пользовательское
                        соглашение</NavLink></li>
                </ul>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src={logo} alt="логотип"/>
                    <img className={styles.subscribe} src={subscribe} alt="описание"/>
                </div>
                <div className={styles.contacts}>
                    <div>
                        <p>Мы в соцсетях:</p>
                        <div className={styles.contactsRow}>
                            <a href="#" target="_blank"><img src={vk} alt="вконтакте"/></a>
                            <a href="#" target="_blank"><img src={inst} alt="инстаграм" className={styles.social}/></a>
                        </div>
                        <div className={styles.contactsRow}>
                            <a href="#" target="_blank" className={styles.phone}><img src={station} alt="стационарный"/></a>
                            <span>+7 (495) 532 9363</span>
                        </div>
                        <div className={styles.contactsRow}>
                            <a href="#" target="_blank" className={styles.phone}><img src={mobile} alt="мобильный"/></a>
                            <span> +7 (977) 600 7000</span>
                        </div>
                    </div>
                    <div>
                        <p className={styles.developer}>Designed by Andrey Semenov</p>
                        <p className={styles.developer}>Powered by Mikhail Kuznetsov</p>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;