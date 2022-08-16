import WagonPicture from "./WagonPicture";
import React from "react";
import AvailableFeatures from "../AvailableFeatures";
import SeatsPrices from "../SeatsPrices";

export default function WagonInfo(props) {
    let data = props.data;
    console.log('wagon info');
    console.log(data[0]);



    let array = [];
    for (let i = 1; i <= data.length; i++) {
        let index;
        if (i < 10) index = "0"+i;
        if (i===1){
            array.push(<li key={i} onClick={clickWagonHandle} className="selected" aria-hidden="true">{index}</li>);
        } else {
            array.push(<li key={i} onClick={clickWagonHandle} className="" aria-hidden="true">{index}</li>);
        }
    }

    function clickWagonHandle(e){
        let selectedIndex = e.target.textContent;
        props.selectWagon(selectedIndex);

        console.log('current')
        console.log(props.selected)
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
                                <span className="wagon-number-1">01</span>
                                <span className="wagon-number-2">вагон</span>
                            </div>
                            <SeatsPrices selected={props.selected}/>
                        </div>
                        <div className="random-peoples-watch">
                            <span>19</span>
                            человек выбирают места в этом поезде
                        </div>
                        <WagonPicture selectSeatFunc={props.selectSeatFunc}
                                      wagonType={props.selected.coach.class_type}/>
                    </li>
                </ul>
            </main>
        </section>
    );

}
