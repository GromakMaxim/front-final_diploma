import React from "react";
import GetBack from "./getBack/GetBack";
import TrainInfo from "./train_info/TrainInfo";
import TicketsNumber from "./tickets_number/TicketsNumber";
import WagonSection from "./wagon/WagonSection";

export default function SeatSelection(props) {
    console.log('seats selection');
    console.log(props.data)


    return (
        <div className='seats-selection-wrapper'>
            <h2>Выбор мест</h2>
            <GetBack func={props.getBack}/>
            <TrainInfo trainData={props.train}/>
            <TicketsNumber/>
            <WagonSection selected={props.selected} selectWagon={props.selectWagon} data={props.data}/>
            <button type="button" className="next-page-btn false" onClick={props.goTo}>Далее</button>
        </div>
    );
}
