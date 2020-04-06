import React, {Component} from 'react';
import PopupboxManager from "../../common/PopupConstructorNew/PopupboxManager";

import "../../common/PopupConstructorNew/react-popupbox.css";
import CoolButton from "../../common/buttons/CoolButton";

import PopupAskContent from "./PopupAskContent";
import PopupThanks from "../PopupThanks";


const updatePopupbox = () => {
    const content = (
        <PopupThanks title={'Благодарим Вас за вопрос!'}
                     description={'Мы ответим Вам в ближайшее время.'}
        />
    );

    PopupboxManager.update({content})
};


class PopupAskButton extends Component {
    openPopupbox() {
        const content = (
            <PopupAskContent update={updatePopupbox}/>
        );

        PopupboxManager.open({
            content,
            config: {
                // overlayOpacity: 0.6,
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    render() {
        return (
            <div>
                <CoolButton onClick={this.openPopupbox} size={'middle'} text={'Задать вопрос'}/>
            </div>
        )
    }
}

export default PopupAskButton;