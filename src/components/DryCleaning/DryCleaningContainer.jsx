import React, {Component} from "react";
// import styles from "./DryCleaning.module.css"
import {NavLink, Route, withRouter} from "react-router-dom";
import DryCleaning from "./DryCleaning";
import {compose} from "redux";


class DryCleaningURL extends Component {
    render() {
        // debugger
        return <DryCleaning/>
    }
}


export default compose(
    withRouter
)(DryCleaningURL);
