import React from "react";

export default function PassengerSmall(props) {
    let user = props.data;
    let gender = (user.gender === 'm') ? 'Мужской' : 'Женский';

    let doc = null;
    if (user.document.series !== null && user.document.series !== undefined) {
        doc = <span>паспорт: {user.document.series} {user.document.number}</span>
    } else {
        doc = <span>Свидетельство о рождении: {user.document.number}</span>
    }

    let usertype = (user.type === 'is_adult') ? 'Взрослый' : 'Ребенок';

    return (
        <li className="verification-passengers-item">
            <div className="verification-passengers-item-avatar">
                <div className="passenger-avatar"/>
                <span className="person_type">{usertype}</span>
            </div>
            <div className="verification-passengers-item-info">
                <span>{user.lastname}{' '}{user.firstname}{' '}{user.patronymic}</span>
                <span>Пол: {gender}</span>
                <span>Дата рождения: {user.birthdate}</span>
                {doc}
            </div>
        </li>
    );
}
