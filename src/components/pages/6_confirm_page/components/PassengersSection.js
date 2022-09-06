import PassengerSmall from "./PassengerSmall";
import ActionButton from "../../../commons/ActionButton";
import React from "react";

import rub_pic from '../img/icon-value.png';

/**
 * block with previously filled in data for all passengers
 */
export default function PassengersSection(props) {
    let arr = [];

    let index = 0;
    props.state.passengers.forEach(passenger => {
        arr.push(<PassengerSmall data={passenger} key={index}/>);
        index++;
    });

    return (
        <section className="verification verification-passengers">
            <div className="verification-title">Пассажиры</div>
            <div className="verification-passengers-main">
                <ul className="verification-passengers-list">
                    {arr}
                </ul>
                <div className="verification-passengers-tickets-price">
                    <div className="tickets-price-summary">
                        <span>Всего</span>
                        <div className="ticket-price">
                            <div className="summary-value">1028</div>
                            <div className="value-image">
                                <img src={rub_pic} alt="rub icon"/>
                            </div>
                        </div>
                    </div>
                    <ActionButton title='Изменить'/>
                </div>
            </div>
        </section>
    );
}
