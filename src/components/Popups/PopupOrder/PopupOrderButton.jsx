import React from 'react';
import PopupboxManager from "../../common/PopupConstructorNew/PopupboxManager";
import "../../common/PopupConstructorNew/react-popupbox.css";
import CoolButton from "../../common/buttons/CoolButton";

import PopupOrderContent from "./PopupOrderContent";
import PopupThanks from "../PopupThanks";



const updatePopupbox = () => {
    const content = (
        <PopupThanks title={'Благодарим Вас за запрос!'}
                     description={'Мы свяжемся с вами в кратчайшие сроки'}/>
    );

    PopupboxManager.update({content})
};


class PopupOrderButton extends React.Component {

    openPopupbox(addInfo) {
        const content = (
            <PopupOrderContent update={updatePopupbox} addInfo={addInfo}/>
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
                <CoolButton onClick={() => {this.openPopupbox(this.props.addInfo)}} size={this.props.size} text={'Заказать услугу'}/>
            </div>
        )
    }
}

export default PopupOrderButton;