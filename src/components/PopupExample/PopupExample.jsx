import React, {Component} from 'react';
import PopupboxManager from "../common/PopupConstructor/PopupboxManager";
import {PopupboxContainer} from "../common/PopupConstructor/PopupboxContainer"
import "./../common/PopupConstructor/react-popupbox.css";

const updatePopupbox = () => {
    const content = (
        <div>
            <span>Update popupbox with new content and config</span>
            <button onClick={PopupboxManager.close}>Close</button>
        </div>
    );


    PopupboxManager.update({
        content,
        config: {
            titleBar: {
                text: 'Updated!'
            }
        }
    })
}



class PopupExample extends Component {


    openPopupbox() {

        const content = (
            <div>
                <span>Open popupbox</span>
                <button onClick={updatePopupbox}>Update!</button>
            </div>
        )

        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: 'Step 1'
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.openPopupbox}>Click me</button>
                <PopupboxContainer/>
            </div>
        )
    }
}

export default PopupExample;