import React, {useState} from "react";
import GetBack from "./getBack/GetBack";
import TrainInfo from "./train_info/TrainInfo";
import TicketsNumber from "./tickets_number/TicketsNumber";
import WagonSection from "./wagon/WagonSection";

/**
 * экран выбора мест
 */
export default function SeatSelection(props) {

    function selectSeat(e){
        console.log(e.target())
    }

    console.log('seats selection');
    console.log(props.data)


    return (
        <div className='seats-selection-wrapper'>
            <h2>Выбор мест</h2>
            <GetBack func={props.getBack}/>
            <TrainInfo trainData={props.train}/>
            <TicketsNumber/>
            <WagonSection selectSeatFunc={props.selectSeatsFunc}
                          selectedSeatsData={props.selectedSeatsData}
                          selected={props.selected}
                          selectWagon={props.selectWagon}
                          data={props.data}/>
            <button type="button" className="next-page-btn false" onClick={props.goTo}>Далее</button>
        </div>
    );
}
