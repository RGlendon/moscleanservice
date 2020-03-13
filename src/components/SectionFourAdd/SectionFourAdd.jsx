import React from "react";
import styles from "./SectionFourAdd.module.css";

const SectionFourAdd = () => {
    return (
        <section className={styles.common}>
            <h3 className={styles.title}>Как это работает</h3>
            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.number}>1</div>
                    <div className={styles.itemContainer}>
                        <h4 className={styles.itemTitle}>Простой заказ</h4>
                        <p className={styles.itemDescription}>Оставьте заявку на услугу, мы свяжемся с Вами в ближайшее
                            время</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.number}>2</div>
                    <div className={styles.itemContainer}>
                        <h4 className={styles.itemTitle}>Качественная услуга</h4>
                        <p className={styles.itemDescription}>Наши специалисты в кратчайшие сроки выполнят поставленную
                            задачу без потери качества</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.number}>3</div>
                    <div className={styles.itemContainer}>
                        <h4 className={styles.itemTitle}>Удобная оплата</h4>
                        <p className={styles.itemDescription}>Оплатите услугу после приема работы удобным для Вас
                            способом </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionFourAdd;