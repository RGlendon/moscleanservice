import React, {Component} from "react";

import ContainerChildren from "./ContainerChildren";


class ContainerParent extends Component {
    constructor(props) {
        super(props);
        this.test = React.createRef();
        // this.ContainerManager = null;

    }

    componentDidMount() {
        this.ContainerManager = new ContainerChildren({testRef: this.test.current});
        // ContainerManager.callRef();
    }

    render() {

        return (
            <div>
                <div ref={this.test} onClick={() => {this.ContainerManager.callRef()}}>1234567891000000</div>
            </div>
        );
    }
}

export default ContainerParent;