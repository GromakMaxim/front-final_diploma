import React from "react";

export default function WagonTypePicture(props) {
    return (
        <li className="seat-type-item">
            <div>
                <img src={props.img} alt="icon-class"/>
            </div>
            <span>{props.descr}</span>
        </li>
    );
}
