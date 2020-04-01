import React from "react";
import styles from "./PopupThanks.module.css";


const PopupThanks = (props) => {
  return (
      <div className={styles.common}>
          <h1 className={styles.title}>{props.title}</h1>
          <p className={styles.description}>{props.description}</p>
      </div>
  );
};

export default PopupThanks;