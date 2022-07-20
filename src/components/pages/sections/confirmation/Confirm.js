import React from "react";
import Offer from "../ticketResults/offer/Offer";

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
            <section className="verification verification-passengers">
                <div className="verification-title">Пассажиры</div>
                <div className="verification-passengers-main">
                    <ul className="verification-passengers-list">
                        <li className="verification-passengers-item">
                            <div className="verification-passengers-item-avatar">
                                <div className="passenger-avatar"/>
                                <span className="person_type">Взрослый</span>
                            </div>
                            <div className="verification-passengers-item-info">
                                <span>кнркрк кркрк ркркркер </span>
                                <span>Пол мужской</span>
                                <span>Дата рождения 2022-07-19</span>
                                <span>паспорт 3534 345345</span>
                            </div>
                        </li>
                        <li className="verification-passengers-item">
                            <div className="verification-passengers-item-avatar">
                                <div className="passenger-avatar"/>
                                <span className="person_type">Взрослый</span>
                            </div>
                            <div className="verification-passengers-item-info">
                                <span>екпауп кикикики кпркпркепкпк </span>
                                <span>Пол мужской</span>
                                <span>Дата рождения 2022-07-19</span>
                                <span>паспорт 2423 353465</span>
                            </div>
                        </li>
                    </ul>
                    <div className="verification-passengers-tickets-price">
                        <div className="tickets-price-summary">
                            <span>Всего</span>
                            <div className="ticket-price">
                                <div className="summary-value">1028</div>
                                <div className="value-image">
                                    <img src="/images/icon-value.png" alt="icon value"/>
                                </div>
                            </div>
                        </div>
                        <button className="btn-seat-selection">Изменить</button>
                    </div>
                </div>
            </section>
            <section className="verification verification-payment">
                <div className="verification-title">Способ оплаты</div>
                <div className="verification-payment-wrapper">
                    <div className="verification-payment_method">Онлайн</div>
                    <div className="verification-payment-btn">
                        <button className="btn-seat-selection">Изменить</button>
                    </div>
                </div>
            </section>
            <section className="verification-btn">
                <button className="btn-seat-selection">Подтвердить</button>
            </section>
        </section>
    );
}
