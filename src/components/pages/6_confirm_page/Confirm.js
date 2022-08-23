import React from "react";
import Offer from "../2_offers_page/sections/offer/Offer";
import ActionButton from "../../commons/ActionButton";
import PassengersSection from "./components/PassengersSection";

import './css/style.css';

export default function Confirm(props) {
    let item = {
        "have_first_class": false,
        "have_second_class": false,
        "have_third_class": false,
        "have_fourth_class": false,
        "have_wifi": false,
        "have_air_conditioning": false,
        "is_express": false,
        "min_price": 575,
        "available_seats": 93,
        "available_seats_info": {
            "second": 32,
            "fourth": 62
        },
        "departure": {
            "_id": 5176,
            "have_first_class": false,
            "have_second_class": true,
            "have_third_class": false,
            "have_fourth_class": true,
            "have_wifi": true,
            "have_air_conditioning": true,
            "is_express": false,
            "min_price": 575,
            "duration": 136140,
            "available_seats": 93,
            "available_seats_info": {
                "second": 32,
                "fourth": 62
            },
            "train": {
                "_id": 1085,
                "name": "Зевс - 65"
            },
            "from": {
                "railway_station_name": "Архангельск",
                "city": {
                    "_id": 1498,
                    "name": "архангельск"
                },
                "datetime": 1616793445
            },
            "to": {
                "railway_station_name": "Ладожский",
                "city": {
                    "_id": 1492,
                    "name": "санкт-петербург"
                },
                "datetime": 1616929585
            },
            "price_info": {
                "second": {
                    "top_price": 1632,
                    "bottom_price": 2508
                },
                "fourth": {
                    "top_price": 575,
                    "bottom_price": 668
                }
            }
        }
    }


    return (
        <section className="confirm-wrapper">
            <section className="verification verification-train">
                <div className="verification-title">Поезд</div>
                <ul className="found-routes-list">
                    <Offer key={item.departure._id} data={item} goTo={props.goTo}/>
                </ul>
            </section>
            <PassengersSection selectedPassengersData={props.selectedPassengersData}/>

            <section className="verification verification-payment">
                <div className="verification-title">Способ оплаты</div>
                <div className="verification-payment-wrapper">
                    <div className="verification-payment_method">Онлайн</div>
                    <div className="verification-payment-btn">
                        <ActionButton title='Изменить'/>
                    </div>
                </div>
            </section>
            <section className="verification-btn">
                <ActionButton title='Подтвердить' goTo={props.goTo}/>
            </section>
        </section>
    );
}
