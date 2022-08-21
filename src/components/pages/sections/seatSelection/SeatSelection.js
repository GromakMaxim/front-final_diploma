import React, {useState} from "react";
import GetBack from "./getBack/GetBack";
import TrainInfo from "./train_info/TrainInfo";
import TicketsNumber from "./tickets_number/TicketsNumber";
import WagonSection from "./wagon/WagonSection";

/**
 * экран выбора мест
 */
export default function SeatSelection(props) {
    const [isActive, setNext] = useState(false);

    let btnNext = <button type="button" className="next-page-btn " onClick={props.goTo}>Далее</button>;
    if (isActive) btnNext = <button type="button" className="next-page-btn active" onClick={props.goTo}>Далее</button>

    return (
        <div className='seats-selection-wrapper'>
            <h2>Выбор мест</h2>
            <GetBack selectSeatFunc={props.selectSeatsFunc} func={props.getBack}/>
            <TrainInfo trainData={props.train}/>
            <TicketsNumber/>
            <WagonSection selectSeatFunc={props.selectSeatsFunc}
                          selectedSeatsData={props.selectedSeatsData}
                          selected={props.selected}
                          selectWagon={props.selectWagon}
                          goNext={setNext}
                          data={props.data}/>
            {btnNext}
        </div>
    );
}
