import React, {Component} from "react";

import {withRouter} from "react-router-dom";
import DryCleaning from "./DryCleaning";
import {compose} from "redux";
import {connect} from "react-redux";
import {addRefsDrycleaning} from "../../redux/commonReducer";


// class DryCleaningContainer extends React.Component {
//     componentDidMount() {
//         let userId = this.props.match.params.userId || this.props.authorizedId || this.props.history.push('/login');
//         this.props.getProfile(userId);
//         this.props.getStatus(userId);
//     }
//
//     render() {
//         return <DryCleaning userProfile={this.props.userProfile}
//                         status={this.props.status}
//                         getStatus={this.props.getStatus}
//                         updateStatus={this.props.updateStatus}/>
//     }
// }

function mapStateToProps(state) {
    return {
        refs: state.refs.refsLink,
    }
}

const mapDispatchToProps = {
    addRefsDrycleaning,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(DryCleaning);



