import React from "react";
import GetBack from "./getBack/GetBack";
import TrainInfo from "./train_info/TrainInfo";

export default function SeatSelection(props) {

    return (
        <div className='seats-selection-wrapper'>
            <h2>Выбор мест</h2>
            <GetBack/>
            <TrainInfo/>
        </div>
    );
}
