import React from 'react';
import PopupboxManager from "../../common/PopupConstructorNew/PopupboxManager";

import CoolButton from "../../common/buttons/CoolButton";

import PopupOrderContent from "./PopupMoreAboutFurnitureContent";
import PopupThanks from "../PopupThanks";
import PopupMoreAboutFurnitureInfo from "./PopupMoreAboutFurnitureInfo";



const updatePopupboxAgain = () => {
    const content = (
        <PopupThanks title={'Благодарим Вас за запрос!'}
                     description={'Мы свяжемся с вами в кратчайшие сроки'}/>
    );

    PopupboxManager.update({content})
};


const updatePopupbox = () => {
    const content = (
        <PopupOrderContent update={updatePopupboxAgain}/>
    );

    PopupboxManager.update({content})
};


class PopupMoreAboutFurnitureButton extends React.Component {

    openPopupbox() {
        const content = (
            <PopupMoreAboutFurnitureInfo update={updatePopupbox}/>
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
                <CoolButton onClick={this.openPopupbox} size={'middle'} color={'light'} text={'Полный список'}/>
            </div>
        )
    }
}

export default PopupMoreAboutFurnitureButton;