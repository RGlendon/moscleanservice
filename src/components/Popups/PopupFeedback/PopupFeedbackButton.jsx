import React, {Component} from 'react';
import PopupboxManager from "../../common/PopupConstructorNew/PopupboxManager";

import "../../common/PopupConstructorNew/react-popupbox.css";
import CoolButton from "../../common/buttons/CoolButton";

import PopupFeedbackContent from "./PopupFeedbackContent";
import PopupThanks from "../PopupThanks";


const updatePopupbox = () => {
    const content = (
        <PopupThanks title={'Благодарим Вас за отзыв!'}
                     description={'Мы свяжемся с вами в кратчайшие сроки'}
        />
    );

    PopupboxManager.update({content})
};


class PopupFeedbackButton extends Component {
    openPopupbox() {
        const content = (
            <PopupFeedbackContent update={updatePopupbox}/>
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
                <CoolButton onClick={this.openPopupbox} size={'middle'} text={'Оставить отзыв'}/>
            </div>
        )
    }
}

export default PopupFeedbackButton;