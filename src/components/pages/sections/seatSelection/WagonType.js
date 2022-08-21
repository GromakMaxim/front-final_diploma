import React from "react";
import WagonTypePicture from "./WagonTypePicture";

export default function WagonType(props) {
    let first = <WagonTypePicture img={"/images/icon-first-class-grey.png"}/>
    let second = <WagonTypePicture img={"/images/icon-second-class-grey.png"}/>
    let third = <WagonTypePicture img={"/images/icon-third-class-grey.png"}/>
    let fourth = <WagonTypePicture img={"/images/icon-fourth-class-grey.png"}/>


    if (props.selected.coach.class_type === "first") {
        first = <WagonTypePicture img={"/images/icon-first-class-yellow.png"} descr="Люкс"/>
    } else if (props.selected.coach.class_type === "second") {
        second = <WagonTypePicture img={"/images/icon-second-class-yellow.png"} descr="Купе"/>
    } else if (props.selected.coach.class_type === "third") {
        third = <WagonTypePicture img={"/images/icon-third-class-yellow.png"} descr="Плацкарт"/>
    } else if (props.selected.coach.class_type === "fourth") {
        fourth = <WagonTypePicture img={"/images/icon-fourth-class-yellow.png"} descr="Сидячий"/>
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
