import React from "react";

import './css/style.css';

export default function GetBack(props) {
    function clickHandle() {
        props.selectSeatFunc(new Set())
        props.func();
    }

    return (
        <div className='seats-selection'>
            <div className="seat-selection-button-wrapper">
                <div>
                    <img src="/images/arrow-white-next.png" alt="arrow-white" width="30" height="20"
                         onClick={props.func}/>
                </div>
                <button onClick={clickHandle}>Выбрать другой поезд</button>
            </div>
        </div>
    )
}
