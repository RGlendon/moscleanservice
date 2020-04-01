import React from "react";
import styles from "./Comments.module.css";
import PopupFeedbackButton from "../Popups/PopupFeedback/PopupFeedbackButton";
import CommentCard from "./CommentCard/CommentCard";

import bg1 from "./../../assets/comments/Rectangle235.jpg";
import ava1 from "./../../assets/comments/Ellipse8.jpg";



const Comments = () => {

    return (
        <div className={styles.general}>
            <h2 className={styles.title}>Отзывы наших клиентов</h2>

            <div className={styles.wrapper}>
                <CommentCard background={bg1} ava={ava1} name={'Ирина25'}/>
                <CommentCard background={bg1} ava={ava1} name={'Ирина25'}/>
                <CommentCard background={bg1} ava={ava1} name={'Ирина25'}/>
                <CommentCard background={bg1} ava={ava1} name={'Ирина25'}/>
            </div>
            <div className={styles.wrapperMore}>
                <p className={styles.addText}>Заказывали наши услуги? Поделитесь впечатлениями!</p>
                <div className={styles.button}>
                    <PopupFeedbackButton/>
                </div>
            </div>
        </div>
    );
};


export default Comments;