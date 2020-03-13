import React, {Component} from "react";

import {withRouter} from "react-router-dom";
import DryCleaning from "./DryCleaning";
import {compose} from "redux";


// class DryCleaningURL extends Component {
//     render() {
//         // debugger
//         return <DryCleaning/>
//     }
// }


export default withRouter(DryCleaning);
