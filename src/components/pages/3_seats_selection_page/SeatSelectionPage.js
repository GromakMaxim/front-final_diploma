import React, {useState} from "react";
import GetBack from "./sections/getBack/GetBack";
import TrainInfo from "./sections/train_info/TrainInfo";
import TicketsNumber from "./sections/tickets_number/TicketsNumber";
import WagonSection from "./sections/wagon_section/WagonSection";

import './css/style.css';

/**
 * экран выбора мест
 */
export default function SeatSelectionPage(props) {
    console.log(props.state.route);
    const [isActive, setNext] = useState(false);

    let btnNext = <button type="button" className="next-page-btn " onClick={props.goTo}>Далее</button>;
    if (isActive) btnNext = <button type="button" className="next-page-btn active" onClick={props.goTo}>Далее</button>

    return (
        <div className='seats-selection-wrapper'>
            <h2>Выбор мест</h2>

            {/*кнопка `выбрать другой поезд`*/}
            <GetBack selectSeatFunc={props.selectSeatsFunc} func={props.getBack}/>

            {/*краткое инфо о выбранном направлении */}
            <TrainInfo state={props.state} setState={props.setState}/>

            {/*количество билетов*/}
            <TicketsNumber/>

            {/*секция `тип вагона` и выбор мест*/}
            <WagonSection state={props.state} setState={props.setState}/>


            {btnNext}
        </div>
    );
}
