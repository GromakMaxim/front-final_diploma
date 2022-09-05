import WagonPicture from "./components/wagon_picture/WagonPicture";
import React, {useState} from "react";
import SeatsPrices from "./components/seats_prices/SeatsPrices";

import './css/seat.css';
import cloneFunc from "../../../../../../../service/CloneFunc";

/**
 * инфо о вагоне
 * (экран выбора мест)
 */
export default function WagonInfo(props) {
    const [selectedIndex, setSelectedIndex]= useState('01');

    let array = [];
    for (let i = 1; i <= props.state.wagons.length; i++) {
        let index;
        if (i < 10) index = "0" + i;
        if (i === parseInt(selectedIndex)) {
            array.push(<li key={i} onClick={clickWagonHandle} className="selected" aria-hidden="true">{index}</li>);
        } else {
            array.push(<li key={i} onClick={clickWagonHandle} className="" aria-hidden="true">{index}</li>);
        }
    }

    /**
     * клик, выбор вагона
     */
    async function clickWagonHandle(e) {
        let selectedIndex = parseInt(e.target.textContent)-1;
        setSelectedIndex(e.target.textContent);
        let temp = props.state;
        temp.wagon = temp.wagons[selectedIndex];

        let newState = await cloneFunc(temp);
        props.setState(newState);
    }

    return (
        <section className="seat-selection-wagons-info">
            <header>
                <div className="wagons-sort"><h4>Вагоны</h4>
                    <ul className="wagons-sort-list">
                        {array}
                    </ul>
                </div>
                <div>Нумерация вагонов начинается с головы поезда</div>
            </header>
            <main>
                <ul className="wagons-list">
                    <li className="wagons-list-item">
                        <div className="wagon-main-info">
                            <div className="wagon-number">
                                <span className="wagon-number-1">{selectedIndex}</span>
                                <span className="wagon-number-2">вагон</span>
                            </div>
                            <SeatsPrices state={props.state} setState={props.setState}/>
                        </div>
                        <div className="random-peoples-watch">
                            <span>19 </span>
                            человек выбирают места в этом поезде
                        </div>
                        <WagonPicture goNext={props.goNext}
                                      selectSeatFunc={props.selectSeatFunc}
                                      selectedSeatsData={props.selectedSeatsData}
                                      wagonType={props.state.wagon.coach.class_type}/>
                    </li>
                </ul>
            </main>
        </section>
    );

}
