import React, {Component} from "react";
import styles from "./Calculator.module.css";


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleTypeOfWorkChange = this.handleTypeOfWorkChange.bind(this);
        this.handleMetersChange = this.handleMetersChange.bind(this);
        this.state = {
            typeOfWork: "dryCleaning",
            meters: 0
        }
    }

    handleTypeOfWorkChange(e) {
        this.setState({typeOfWork: e.target.value});
        console.log(this.state);
    }

    handleMetersChange(e) {
        this.setState({meters: +e.target.value});
        // console.log(e.target.value);
        console.log(this.state);
    }

    // componentDidUpdate(prevProps, prevState) {
    //
    // }

    render() {
        return (
            <div>
                <label htmlFor='typeOfWork'>Выберите вид работ</label>
                <select id={'typeOfWork'} name='typeOfWork' onChange={this.handleTypeOfWorkChange}>
                    <option value="dryCleaning">Химчистка</option>
                    <option value="cleaning">Уборка</option>
                    <option value="washing">Мытье</option>
                </select>
                {this.state.typeOfWork === "dryCleaning" &&
                <div>
                    отобразим меню химчистки
                    <label className={styles.labelForRadio} htmlFor="a40">40</label>
                    <input className={styles.checkbox} id={"a40"} type="radio" name="40metrov" value={400} onClick={(e) => {this.handleMetersChange(e)}}/>
                    <label className={styles.labelForRadio} htmlFor="a50">50</label>
                    <input className={styles.checkbox} id={"a50"} type="radio" name="50metrov" value={500} onClick={(e) => {this.handleMetersChange(e)}}/>
                    <label className={styles.labelForRadio} htmlFor="a60">60</label>
                    <input className={styles.checkbox} id={"a60"} type="radio" name="60metrov" value={600} onClick={(e) => {this.handleMetersChange(e)}}/>

                </div>}

                {this.state.typeOfWork === "cleaning" &&
                <div>отобразим меню уборки</div>}
                {this.state.typeOfWork === "washing" &&
                <div>отобразим меню мытья</div>}
                {this.state.meters === 400 && this.state.typeOfWork === "dryCleaning" &&
                <div>цена за 40 метров</div>}
                {this.state.meters === 500 && this.state.typeOfWork === "dryCleaning" &&
                <div>цена за 50 метров</div>}
                {this.state.meters === 600 && this.state.typeOfWork === "dryCleaning" &&
                <div>цена за 60 метров</div>}
            </div>
        );
    }
}

export default Calculator;