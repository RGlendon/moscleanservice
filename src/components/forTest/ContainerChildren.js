import React, {Component} from "react";
import styles from './ContainerChildren.module.css';

class ContainerChildren {
    constructor({testRef}) {
        this.test = testRef;
    }

    callRef() {
        console.log(this.test);
        this.test.classList.add(`${styles.wrapper}`);
    }
}

export default ContainerChildren;