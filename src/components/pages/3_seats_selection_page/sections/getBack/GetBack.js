import React from "react";

import arrow_white_icon from './img/arrow-white-next.png';
import './css/style.css';

/**
 * кнопка `выбрать другой поезд`
 * (экран выбора мест)
 */
export default function GetBack(props) {
    function clickHandle() {
        props.selectSeatFunc(new Set())
        props.func();
    }

    return (
        <div className='seats-selection'>
            <div className="seat-selection-button-wrapper">
                <div>
                    <img src={arrow_white_icon} alt="arrow-white" width="30" height="20"
                         onClick={props.func}/>
                </div>
                <button onClick={clickHandle}>Выбрать другой поезд</button>
            </div>
        </div>
    )
}
