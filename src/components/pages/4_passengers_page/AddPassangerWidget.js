import Passenger from "./components/Passenger";
import React from "react";

import './css/style.css';

export default function AddPassengerWidget(props) {
    console.log(props.state);

    let arr = [];

    let passengerNumber = 1;
    props.state.selectedSeats.forEach(seat => {
        arr.push(<Passenger key={seat}
                            number={passengerNumber}
                            state={props.state}
                            setState={props.setState}/>);
        passengerNumber++;
    })

    let btnNext = <button type="button" className="next-page-btn">Далее</button>;
    if (props.state.selectedSeats.size === props.state.passengers.size){
        btnNext = <button type="button" className="next-page-btn active" onClick={props.goTo}>Далее</button>
    }

    return (
        <div className='passenger-wrapper'>
            {arr}
            {btnNext}
        </div>
    )

}
