import React from "react";
import styles from "./Calculator.module.css";

import arrowDownSelect from "./../../assets/arrowDownSelect.svg";
import CoolButton from "../common/buttons/CoolButton";
import PopupOrderButton from "../Popups/PopupOrder/PopupOrderButton";
import {toggleMenu, updateAddInfo} from "../../redux/commonReducer";
import {connect} from "react-redux";


class Calculator extends React.Component {
    constructor(props) {
        // debugger
        super(props);
        this.input = React.createRef();
        this.state = {
            isOpen: false,
            selectedElement: 1,
            //данные для axios запроса
            typeOfWork: "maintenanceСleaning",
            meters: 40,
            price: 1600
        }
    }

    toggleChoise = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    closeChoise = () => {
        this.setState({isOpen: false});
    };

    setTypeOfWork = (type) => {
        this.setState({typeOfWork: type});
        // setTimeout(() => {
        //     this.closeChoise();
        // }, 100);
        this.closeChoise();
    };

    handleTypeOfWork = (type) => {
        this.setTypeOfWork(type);
        this.setMeters(40);
        this.selectElement(1);
    };

    setMeters = (meters) => {
        if (typeof meters === 'number') {
            this.setState({meters: meters});
        } else {
            this.setState({meters: meters.target.value});
        }
    };

    selectElement = (number) => {
        this.setState({selectedElement: number});
    };

    recalculatePrice = () => {
        switch (this.state.typeOfWork) {
            case "maintenanceСleaning":
                if (0 < this.state.meters && this.state.meters <= 40) {
                   this.setState({price: 1600});
                } else if (40 < this.state.meters && this.state.meters <= 50) {
                    this.setState({price: 1800});
                } else if (50 < this.state.meters && this.state.meters <= 60) {
                    this.setState({price: 2000});
                } else if (60 < this.state.meters) {
                    this.setState({price: this.state.meters * 34});
                }
                break;
            case "spring-cleaning":
                if (0 < this.state.meters && this.state.meters <= 40) {
                    this.setState({price: 1800});
                } else if (40 < this.state.meters && this.state.meters <= 50) {
                    this.setState({price: 2000});
                } else if (50 < this.state.meters && this.state.meters <= 60) {
                    this.setState({price: 2200});
                } else if (60 < this.state.meters) {
                    this.setState({price: this.state.meters * 37});
                }
                break;
            case "CleaningAfterRepair":
                if (0 < this.state.meters && this.state.meters <= 40) {
                    this.setState({price: 2000});
                } else if (40 < this.state.meters && this.state.meters <= 50) {
                    this.setState({price: 2200});
                } else if (50 < this.state.meters && this.state.meters <= 60) {
                    this.setState({price: 2400});
                } else if (60 < this.state.meters) {
                    this.setState({price: this.state.meters * 40});
                }
                break;
            case "WashingWindows":
                if (0 < this.state.meters && this.state.meters <= 40) {
                    this.setState({price: 1000});
                } else if (40 < this.state.meters && this.state.meters <= 50) {
                    this.setState({price: 1300});
                } else if (50 < this.state.meters && this.state.meters <= 60) {
                    this.setState({price: 1700});
                } else if (60 < this.state.meters) {
                    this.setState({price: this.state.meters * 29});
                }
                break;
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.typeOfWork !== this.state.typeOfWork || prevState.meters !== this.state.meters) {
            this.recalculatePrice();
        }
        if (prevState.selectedElement !== 4) {
            this.input.current.value = '';
        }

        let addInfo = {
            typeOfWork: this.state.typeOfWork,
            meters: this.state.meters,
            price: this.state.price
        };

        this.props.updateAddInfo(addInfo);
        // debugger
        // console.log(addInfo);
    }

    render() {
        // let works = [
        //     {type: 'maintenanceСleaning', name: 'Поддерживающая уборка'},
        //     {type: 'spring-cleaning', name: 'Генеральная уборка'},
        //     {type: 'CleaningAfterRepair', name: 'Уборка после ремонта'},
        //     {type: 'WashingWindows', name: 'Мытье окон'},
        // ]

        return (
            <div className={styles.common}>
                <div className={styles.selectWrapper}>
                    <div className={styles.select} onClick={this.toggleChoise}>
                        {this.state.typeOfWork === 'maintenanceСleaning' &&
                            <p>Поддерживающая уборка</p>}
                        {this.state.typeOfWork === 'spring-cleaning' &&
                            <p>Генеральная уборка</p>}
                        {this.state.typeOfWork === 'CleaningAfterRepair' &&
                            <p>Уборка после ремонта</p>}
                        {this.state.typeOfWork === 'WashingWindows' &&
                            <p>Мытье окон</p>}
                        <img src={arrowDownSelect} alt="стрелка" className={styles.arrow}/>
                    </div>
                    <div className={`${styles.selectContainer} ${this.state.isOpen ? styles.open : null}`}>
                        {this.state.typeOfWork !== 'maintenanceСleaning' &&
                            <p onClick={() => {this.handleTypeOfWork('maintenanceСleaning')}}>Поддерживающая уборка</p>}
                        {this.state.typeOfWork !== 'spring-cleaning' &&
                            <p onClick={() => {this.handleTypeOfWork('spring-cleaning')}}>Генеральная уборка</p>}
                        {this.state.typeOfWork !== 'CleaningAfterRepair' &&
                            <p onClick={() => {this.handleTypeOfWork('CleaningAfterRepair')}}>Уборка после ремонта</p>}
                        {this.state.typeOfWork !== 'WashingWindows' &&
                            <p onClick={() => {this.handleTypeOfWork('WashingWindows')}}>Мытье окон</p>}
                    </div>
                </div>
                <div className={styles.meters}>
                    <p className={`${styles.option} ${this.state.selectedElement === 1 ? styles.selectedOption : null}`}
                       onClick={() => {this.setMeters(40); this.selectElement(1)}}>40 м<sup>2</sup></p>
                    <p className={`${styles.option} ${this.state.selectedElement === 2 ? styles.selectedOption : null}`}
                       onClick={() => {this.setMeters(50); this.selectElement(2)}}>50 м<sup>2</sup></p>
                    <p className={`${styles.option} ${this.state.selectedElement === 3 ? styles.selectedOption : null}`}
                       onClick={() => {this.setMeters(60); this.selectElement(3)}}>60 м<sup>2</sup></p>
                    <div className={`${styles.option} ${this.state.selectedElement === 4 ? styles.selectedOption : null} ${styles.optionInput}`}
                    onClick={() => {this.selectElement(4)}}>
                        <input type="number" ref={this.input} className={styles.input} onChange={(e) => {this.setMeters(e); this.selectElement(4)}}/>
                        <p className={styles.dimension}>м<sup>2</sup></p>
                    </div>
                </div>
                <div className={styles.priceContainer}>
                    <p>Цена</p>
                    <p>{`от ${this.state.price} ₽`}</p>
                </div>
                <div className={styles.button}>
                    {/*не получается прокинуть в попап пропсы, пришлось создавать глобальные данные*/}
                    <PopupOrderButton />
                </div>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         isOpenMenu: state.common.isOpenMenu,
//     }
// }

let mapDispatchToProps = {
    updateAddInfo,
};

export default connect(null, mapDispatchToProps)(Calculator);