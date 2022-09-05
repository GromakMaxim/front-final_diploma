import React from "react";

import first_class_g from '../img/icon-first-class-grey.png';
import first_class_y from '../img/icon-first-class-yellow.png';

import second_class_g from '../img/icon-second-class-grey.png';
import second_class_y from '../img/icon-second-class-yellow.png';

import third_class_g from '../img/icon-third-class-grey.png';
import third_class_y from '../img/icon-third-class-yellow.png';

import fourth_class_g from '../img/icon-fourth-class-grey.png';
import fourth_class_y from '../img/icon-fourth-class-yellow.png';

/**
 * иконка типов вагонов
 * (экран выбора мест)
 */
export default function WagonTypePicture(props) {

    let picture;
    if (props.classType === '1') {
        picture = first_class_g;
        if (props.active) picture = first_class_y;
    }

    if (props.classType === '2') {
        picture = second_class_g;
        if (props.active) picture = second_class_y;
    }

    if (props.classType === '3') {
        picture = third_class_g;
        if (props.active) picture = third_class_y;
    }

    if (props.classType === '4') {
        picture = fourth_class_g;
        if (props.active) picture = fourth_class_y;
    }
    return (
        <li className="seat-type-item">
            <div>
                <img src={picture} alt="icon-class"/>
            </div>
            <span>{props.descr}</span>
        </li>
    );
}
