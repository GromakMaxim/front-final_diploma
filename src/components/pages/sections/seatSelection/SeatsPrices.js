import AvailableFeatures from "./AvailableFeatures";
import React from "react";

export default function SeatsPrices(props){
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
                <td className="wagon-seat-price">{props.selected.coach.top_price}
                    <img src="/images/icon-value.png" alt="icon price" width="14" height="17"/>
                </td>
                <AvailableFeatures selected={props.selected}/>
            </tr>
            <tr>
                <td className="wagon-seat-info">Нижние
                    <span>11</span>
                </td>
                <td className="wagon-seat-price">{props.selected.coach.bottom_price}
                    <img src="/images/icon-value.png" alt="icon price" width="14" height="17"/>
                </td>
                <td></td>
            </tr>
            </tbody>
        </table>
    )
}
