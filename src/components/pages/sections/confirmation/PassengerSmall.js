import React from "react";

export default function PassengerSmall(props) {
    return (
        <li className="verification-passengers-item">
            <div className="verification-passengers-item-avatar">
                <div className="passenger-avatar"/>
                <span className="person_type">{props.personType}</span>
            </div>
            <div className="verification-passengers-item-info">
                <span>{props.surname}{' '}{props.name}{' '}{props.patronymic}</span>
                <span>Пол {props.gender}</span>
                <span>Дата рождения {props.birth}</span>
                <span>паспорт {props.document}</span>
            </div>
        </li>
    );
}
