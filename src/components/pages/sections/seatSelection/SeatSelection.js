import React from "react";

export default function SeatSelection(props) {

    return (
        <div className='seats-selection-wrapper'>
            <h2>Выбор мест</h2>
            <div className='seats-selection'>

                <div className="seat-selection-button-wrapper">
                    <div>
                        <img src="/images/arrow-white-next.png" alt="arrow-white" width="30" height="20"/>
                    </div>
                    <button>Выбрать другой поезд</button>
                </div>
            </div>
        </div>
    );
}
