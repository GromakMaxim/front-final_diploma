import React from "react";
import WagonTypePicture from "./components/WagonTypePicture";

import './css/type.css';


/**
 * иконки типов вагонов
 * (экран выбора мест)
 */
export default function WagonType(props) {
    console.log(props.state);
    let first = <WagonTypePicture classType='1'/>
    let second = <WagonTypePicture classType='2'/>
    let third = <WagonTypePicture classType='3'/>
    let fourth = <WagonTypePicture classType='4'/>

    let coach = props.state.wagon.coach;
    if (coach.class_type === "first") {
        first = <WagonTypePicture classType='1' descr="Люкс"/>
    } else if (coach.class_type === "second") {
        second = <WagonTypePicture classType='2' descr="Купе"/>
    } else if (coach.class_type === "third") {
        third = <WagonTypePicture classType='3' descr="Плацкарт"/>
    } else if (coach.class_type === "fourth") {
        fourth = <WagonTypePicture classType='4' descr="Сидячий"/>
    }

    return (
        <div className="seat-selection-seat-type">
            <h3>Тип вагона</h3>
            <ul className="seat-type-list">
                {fourth}
                {third}
                {second}
                {first}
            </ul>
        </div>
    );
}
