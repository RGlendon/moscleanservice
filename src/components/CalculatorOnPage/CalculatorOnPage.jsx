import React from "react";
import styles from "./CalculatorOnPage.module.css";

import {updateAddInfo} from "../../redux/commonReducer";
import {connect} from "react-redux";

import {Route} from "react-router-dom";
import PopupOrderFullButton from "../Popups/PopupOrderFull/PopupOrderFullButton";


class CalculatorOnPage extends React.Component {
    constructor(props) {
        // debugger
        super(props);
        this.input = React.createRef();
        this.items = this.props.items;
        this.state = {
            isOpen: false,
            selectedElement: 1,
            //данные для axios запроса
            typeOfWork: "",
            meters: 40,
            metersPrice: 1600,
            addPrice: 0,
            commonPrice: 0,
            selected: [],
        };
        this.maintenance = {
            displayed: [
                {id: 1, name: 'Поддерживающая услуга 1', count: 1, price: 500},
                {id: 2, name: 'Поддерживающая услуга 2', count: 1, price: 100},
                {id: 3, name: 'Поддерживающая услуга 3', count: 1, price: 200},
                {id: 4, name: 'Поддерживающая услуга 4', count: 1, price: 300},
            ],
            hidden: [
                {id: 5, name: 'Поддерживающая услуга 5', count: 1, price: 100},
                {id: 6, name: 'Поддерживающая услуга 6', count: 1, price: 200},
                {id: 7, name: 'Поддерживающая услуга 7', count: 1, price: 300},
                {id: 8, name: 'Поддерживающая услуга 8', count: 1, price: 400},
            ]
        };
        this.spring = {
            displayed: [
                {id: 9, name: 'Генеральная 1', count: 1, price: 100},
                {id: 10, name: 'Генеральная 2', count: 1, price: 200},
                {id: 11, name: 'Генеральная 3', count: 1, price: 300},
                {id: 12, name: 'Генеральная 4', count: 1, price: 400},
            ],
            hidden: [
                {id: 13, name: 'Генеральная 5', count: 1, price: 500},
                {id: 14, name: 'Генеральная 6', count: 1, price: 600},
                {id: 15, name: 'Генеральная 7', count: 1, price: 700},
            ]
        };
        this.afterRepair = {
            displayed: [
                {id: 1, name: 'Ремонт 1', count: 1, price: 100},
                {id: 2, name: 'Ремонт 2', count: 1, price: 200},
                {id: 3, name: 'Ремонт 3', count: 1, price: 300},
                {id: 4, name: 'Ремонт 4', count: 1, price: 400},
            ],
            hidden: [
                {id: 5, name: 'Ремонт 5', count: 1, price: 500},
                {id: 6, name: 'Ремонт 6', count: 1, price: 600},
            ]
        };

    }

    toggleChoise = () => {
        this.setState({isOpen: !this.state.isOpen});
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

    recalculateMetersPrice = () => {
        switch (this.state.typeOfWork) {
            case "maintenance":
                if (0 < this.state.meters && this.state.meters <= 40) {
                    this.setState({metersPrice: 1600});
                } else if (40 < this.state.meters && this.state.meters <= 50) {
                    this.setState({metersPrice: 1800});
                } else if (50 < this.state.meters && this.state.meters <= 60) {
                    this.setState({metersPrice: 2000});
                } else if (60 < this.state.meters) {
                    this.setState({metersPrice: this.state.meters * 34});
                }
                break;
            case "spring":
                if (0 < this.state.meters && this.state.meters <= 40) {
                    this.setState({metersPrice: 1800});
                } else if (40 < this.state.meters && this.state.meters <= 50) {
                    this.setState({metersPrice: 2000});
                } else if (50 < this.state.meters && this.state.meters <= 60) {
                    this.setState({metersPrice: 2200});
                } else if (60 < this.state.meters) {
                    this.setState({metersPrice: this.state.meters * 37});
                }
                break;
            case "afterRepair":
                if (0 < this.state.meters && this.state.meters <= 40) {
                    this.setState({metersPrice: 2000});
                } else if (40 < this.state.meters && this.state.meters <= 50) {
                    this.setState({metersPrice: 2200});
                } else if (50 < this.state.meters && this.state.meters <= 60) {
                    this.setState({metersPrice: 2400});
                } else if (60 < this.state.meters) {
                    this.setState({metersPrice: this.state.meters * 40});
                }
                break;
            case "detailed":
                if (0 < this.state.meters && this.state.meters <= 40) {
                    this.setState({metersPrice: 1000});
                } else if (40 < this.state.meters && this.state.meters <= 50) {
                    this.setState({metersPrice: 1300});
                } else if (50 < this.state.meters && this.state.meters <= 60) {
                    this.setState({metersPrice: 1700});
                } else if (60 < this.state.meters) {
                    this.setState({metersPrice: this.state.meters * 29});
                }
                break;
            default:
                break;
        }
    };

    recalculateCommonPrice() {
        // let {metersPrice, addPrice} = this.state;
        // let commonPrice = metersPrice + addPrice;
        // this.setState({commonPrice: commonPrice});
        this.setState({commonPrice: this.state.metersPrice + this.state.addPrice});
        // debugger
    }

    chooseService = (id, branch) => {
        let choosenService;

        for (let key in branch) {
            let current = branch[key].find(item => item.id === id);
            if (current) {
                choosenService = current;
            }
        }

        if (!this.state.selected.find(item => item.id === choosenService.id)) {
            this.setState(state => ({
                selected: [...state.selected, choosenService],
            }));
        } else {
            this.setState(state => ({
                selected: [...state.selected.filter(item => item.id !== choosenService.id)],
            }));
        }

        // console.log(this.state.selected);
    }

    addPrice() {
        let addPriceInner = 0;
        this.state.selected.forEach(item => addPriceInner += item.price);
        // console.log(addPriceInner)
        this.setState({addPrice: addPriceInner});
    }

    resetSelected() {
        this.setState({selected: []});
    }

    componentDidMount() {
        this.setState({typeOfWork: this.props.url});
        // debugger
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.url !== this.props.url) {
            this.setState({typeOfWork: this.props.url});
            this.resetSelected();
            this.setMeters(40);
            this.selectElement(1);
        }

        // debugger
        if (prevState.typeOfWork !== this.state.typeOfWork || prevState.meters !== this.state.meters) {
            this.setState({typeOfWork: this.props.url});
            this.recalculateMetersPrice();
            this.recalculateCommonPrice();
        }

        if (prevState.selectedElement !== 4) {
            this.input.current.value = '';
        }

        let addInfo = {
            typeOfWork: this.state.typeOfWork,
            meters: this.state.meters,
            // addServices: this.state.selected,
            addServices: JSON.stringify(this.state.selected),
            commonPrice: this.state.commonPrice,
        };

        this.props.updateAddInfo(addInfo);
        // debugger
        // console.log(addInfo);

        if (prevState.metersPrice !== this.state.metersPrice || prevState.addPrice !== this.state.addPrice) {
            this.recalculateCommonPrice();
        }

        if (prevState.selected !== this.state.selected) {
            // console.log(this.state.selected)
            this.addPrice();
        }

    }


    togglePanel(e) {
        if (e.target.matches(`.${styles.accordion}`)) {
            e.target.classList.toggle(`${styles.active}`);

            let panel = e.target.previousElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    }

    check(e) {
        if (e.target.matches(`.${styles.checkbox}`)) {
            e.target.classList.toggle(`${styles.activeCheckbox}`);

        }
    }

    itemsMap(array, branch) {
        return array.map(({id, name, count, price}) => (
            <div className={styles.item} key={id}>
                <div className={styles.checkbox} onClick={() => {this.chooseService(id, branch)}}/>
                <p>{name}</p>
            </div>)
        );
    }

    render() {

        return (
            <div className={styles.common}>
                <div className={styles.firstPart}>
                    <p className={styles.description}>Площадь помещения:</p>
                    <div className={styles.meters}>
                        <p className={`${styles.option} ${this.state.selectedElement === 1 ? styles.selectedOption : null}`}
                           onClick={() => {
                               this.setMeters(40);
                               this.selectElement(1);
                           }}>40 м<sup>2</sup></p>
                        <p className={`${styles.option} ${this.state.selectedElement === 2 ? styles.selectedOption : null}`}
                           onClick={() => {
                               this.setMeters(50);
                               this.selectElement(2);
                           }}>50 м<sup>2</sup></p>
                        <p className={`${styles.option} ${this.state.selectedElement === 3 ? styles.selectedOption : null}`}
                           onClick={() => {
                               this.setMeters(60);
                               this.selectElement(3)
                           }}>60 м<sup>2</sup></p>
                        <div
                            className={`${styles.option} ${this.state.selectedElement === 4 ? styles.selectedOption : null} ${styles.optionInput}`}
                            onClick={() => {
                                this.selectElement(4)
                            }}>
                            <input type="number" ref={this.input} className={styles.input} onChange={(e) => {
                                this.setMeters(e);
                                this.selectElement(4)
                            }}/>
                            <p className={styles.dimension}>м<sup>2</sup></p>
                        </div>
                    </div>

                    <p className={styles.description}>Доп. услуги:</p>
                    <div onClick={this.check}>
                        <div className={styles.services}>
                            <Route exact path='/cleaning/maintenance' render={() => this.itemsMap(this.maintenance.displayed, this.maintenance) }/>
                            <Route exact path='/cleaning/spring' render={() => this.itemsMap(this.spring.displayed, this.spring) }/>
                            <Route exact path='/cleaning/afterRepair' render={() => this.itemsMap(this.afterRepair.displayed, this.afterRepair) }/>
                        </div>

                        <div className={`${styles.services} ${styles.panel}`}>
                            <Route exact path='/cleaning/maintenance' render={() => this.itemsMap(this.maintenance.hidden, this.maintenance) }/>
                            <Route exact path='/cleaning/spring' render={() => this.itemsMap(this.spring.hidden, this.spring) }/>
                            <Route exact path='/cleaning/afterRepair' render={() => this.itemsMap(this.afterRepair.hidden, this.afterRepair) }/>
                        </div>

                        <button className={styles.accordion} onClick={this.togglePanel}>Другие доп. услуги</button>
                    </div>
                </div>

                <div className={styles.priceContainer}>
                    {/*<p className={styles.price}>{`Цена: ${this.state.metersPrice} ₽`}</p>*/}
                    <p className={styles.price}>{`Цена: ${this.state.commonPrice} ₽`}</p>

                    <div className={styles.button}>
                        {/*в данном случае использую глобальный store для практики*/}
                        <PopupOrderFullButton/>
                    </div>
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

export default connect(null, mapDispatchToProps)(CalculatorOnPage);