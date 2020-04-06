import React, {Component} from "react";
import styles from "./BeforeAfter.module.css";

import PopupboxManager from "../common/PopupConstructorNew/PopupboxManager";


{/*<div className={styles.item} key={id}>*/}
{/*    <img className={styles.img} src={image} alt="картинка"/>*/}
{/*</div>*/}

{/*<img key={id} className={styles.img} src={image} alt="картинка"/>*/}








class BeforeAfterFunc extends Component {
    constructor(props) {
        // debugger
        super(props);
        this.elems = [];
        // this.state = {
        //     selectedElement: null,
        // }
    }


    openPopupbox = (element) => {

        const content = (
            <div>
                {element}
            </div>
        );

        PopupboxManager.open({
            content,
            config: {
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    };

    // itemSelection = (e) => {
    //     if (e.target.matches(`.${styles.img}`)) {
    //         this.setState({selectedElement: e.target});
    //     }
    //     // console.log(this.state.selectedElement)
    // };

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.selectedElement !== this.state.selectedElement) {
    //
    //         console.log(this.state.selectedElement)
    //
    //         this.openPopupbox(<div className={styles.popupImg} style={{backgroundImage: `url(${this.state.selectedElement.style.backgroundImage.slice(5, -2)})`}}></div>)
    //         // this.openPopupbox(<div className={styles.img} style={{backgroundImage: `url(${this.state.selectedElement.style.backgroundImage.slice(5, -2)})`}}></div>)
    //     }
    // }


    render() {
        let currentElem;

        let images = this.props.data.map(({id, image}) => (
                <div className={styles.item} key={id} ref={(elem) => {
                    this.elems[id] = elem
                }} onClick={() => {

                    this.openPopupbox(<div>{this.elems[id]}</div>);
                }}>
                    <div className={styles.img} style={{backgroundImage: `url(${image})`}}/>
                    <div>тут некие другие элементы</div>
                </div>
            )
        );

        return (
            <div className={styles.common}>
                <h2 className={styles.title}>До и после</h2>
                <div className={styles.imageContainer}>
                    {images}
                </div>
            </div>
        );
    }
}


export default BeforeAfterFunc;


