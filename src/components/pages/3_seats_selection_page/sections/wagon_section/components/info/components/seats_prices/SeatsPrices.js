import AvailableFeatures from "./components/AvailableFeatures";
import React from "react";

import '../wagon_picture/css/style.css';

import icon_price from './img/icon-value.png';

export default function SeatsPrices(props) {
    return (
        <table className="wagon-info-table">
            <thead>
            <tr className="wagon-info-table-titles">
                <td>Места<span></span></td>
                <td>Стоимость</td>
                <td>Обслуживание ФПК</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="wagon-seat-info">Верхние
                    <span>10</span>
                </td>
                <td className="wagon-seat-price">{props.state.wagon.coach.top_price}
                    <img src={icon_price} alt="icon price" width="14" height="17"/>
                </td>
                <AvailableFeatures state={props.state} setState={props.setState}/>
            </tr>
            <tr>
                <td className="wagon-seat-info">Нижние
                    <span>11</span>
                </td>
                <td className="wagon-seat-price">{props.state.wagon.coach.bottom_price}
                    <img src={icon_price} alt="icon price" width="14" height="17"/>
                </td>
                <td></td>
            </tr>
            </tbody>
        </table>
    )
}
