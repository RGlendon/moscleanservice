import React from 'react';
import PopupboxManager from "../../common/PopupConstructorNew/PopupboxManager";
import "../../common/PopupConstructorNew/react-popupbox.css";
import CoolButton from "../../common/buttons/CoolButton";

import PopupOrderFullContent from "./PopupOrderFullContent";
import PopupThanks from "../PopupThanks";




const updatePopupbox = () => {
    const content = (
        <PopupThanks title={'Благодарим Вас за запрос!'}
                     description={'Мы свяжемся с вами в кратчайшие сроки'}/>
    );

    PopupboxManager.update({content})
};


class PopupOrderFullButton extends React.Component {

    openPopupbox() {
        const content = (
            <PopupOrderFullContent update={updatePopupbox}/>
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
                <CoolButton onClick={this.openPopupbox} size={'middle'} text={'Заказать услугу'}/>
            </div>
        )
    }
}

export default PopupOrderFullButton;