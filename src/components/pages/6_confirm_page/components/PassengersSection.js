import PassengerSmall from "./PassengerSmall";
import ActionButton from "../../../commons/ActionButton";
import React from "react";

export default function PassengersSection(props) {
    let arr = [];

    let index = 0;
    props.selectedPassengersData.forEach(psngr => {
        arr.push(<PassengerSmall data={psngr} key={index}/>);
        index++;
    })

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
                                <img src="/src/components/pages/2_offers_page/sections/feature/img/icon-value.png" alt="icon value"/>
                            </div>
                        </div>
                    </div>
                    <ActionButton title='Изменить'/>
                </div>
            </div>
        </section>
    );
}
