import React, {Component} from "react";
import styles from "./BeforeAfterSmall.module.css";

import PopupboxManager from "../../common/PopupConstructorNew/PopupboxManager";


class BeforeAfterSmall extends Component {
    constructor(props) {
        // debugger
        super(props);
        this.state = {
            selectedElement: null,
        }
    }

    itemSelection = (e) => {
        if (e.target.matches(`.${styles.img}`)) {
            this.setState({selectedElement: e.target});
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedElement && prevState.selectedElement !== this.state.selectedElement) {
            let url = this.state.selectedElement.style.backgroundImage.slice(5, -2);
            let content = ( <div className={styles.popupImg} style={{backgroundImage: `url(${url})`}}/> );

            PopupboxManager.open({
                content,
                config: {
                    padding: false,
                    closeBtn: false,
                    fadeIn: true,
                    fadeInSpeed: 500
                }
            });

            this.setState({selectedElement: null});
        }
    }


    render() {
        let images = this.props.data.map(({id, image}) => (
                <div className={styles.item} key={id}>
                    <div className={styles.img} style={{backgroundImage: `url(${image})`}}/>
                    <div className={styles.subtitle}>
                        <p>Было</p>
                        <p>Стало</p>
                    </div>
                </div>
            )
        );

        return (
            <div className={styles.common}>
                <div className={styles.imageContainer} onClick={this.itemSelection}>
                    {images}
                </div>

            </div>
        );
    }
}


export default BeforeAfterSmall;