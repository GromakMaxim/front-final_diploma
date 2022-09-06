import React, {useState} from "react";
import GetBack from "./sections/getBack/GetBack";
import TrainInfo from "./sections/train_info/TrainInfo";
import TicketsNumber from "./sections/tickets_number/TicketsNumber";
import WagonSection from "./sections/wagon_section/WagonSection";

import './css/style.css';
import cloneFunc from "../../../service/CloneFunc";

/**
 * seat selection screen
 */
export default function SeatSelectionPage(props) {
    console.log(props.state);
    const [isActive, setNext] = useState(false);

    async function goTo() {
        let temp = props.state;
        temp.display = 'passengers';
        let newState = await cloneFunc(temp);
        props.setState(newState);
    }

    let btnNext = <button type="button" className="next-page-btn ">Далее</button>;
    if (isActive) btnNext = <button type="button" className="next-page-btn active" onClick={goTo}>Далее</button>

    function turnOnNextButton(value) {
        setNext(value);
    }

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
            <WagonSection state={props.state} setState={props.setState} goNext={turnOnNextButton}/>


            {btnNext}
        </div>
    );
}
