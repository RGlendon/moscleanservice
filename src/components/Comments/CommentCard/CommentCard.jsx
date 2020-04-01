import React from "react";
import styles from "./CommentCard.module.css";

const CommentCard = (props) => {
    let url = props.background;
    let ava = props.ava;
    let name = props.name;

    return (
        <div className={styles.common}>
            <div className={styles.bg} style={{backgroundImage: `url(${url})`}}></div>
            <div className={styles.ava} style={{backgroundImage: `url(${ava})`}}></div>
            <h3 className={styles.name}>{props.name}</h3>
        </div>
    );
};

export default CommentCard;