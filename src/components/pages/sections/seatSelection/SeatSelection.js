import React from "react";
import GetBack from "./getBack/GetBack";
import TrainInfo from "./train_info/TrainInfo";
import TicketsNumber from "./tickets_number/TicketsNumber";
import Wagon from "./wagon/Wagon";

export default function SeatSelection(props) {



    return (
        <div className='seats-selection-wrapper'>
            <h2>Выбор мест</h2>
            <GetBack/>
            <TrainInfo trainData={props.train}/>
            <TicketsNumber/>
            <Wagon/>
            <button type="button" className="next-page-btn false" onClick={props.goTo}>Далее</button>
        </div>
    );
}
