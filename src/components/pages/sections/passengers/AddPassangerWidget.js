import Passenger from "./Passenger";
import React from "react";

export default function AddPassengerWidget(props) {
    let arr = [];

    let passengerNumber = 1;
    props.selectedSeatsData.forEach(seat => {
        arr.push(<Passenger key={seat} number={passengerNumber}/>);
        passengerNumber++;
    })


    return (
        <div className='passenger-wrapper'>
            {arr}
            <button type="button" className="next-page-btn false" onClick={props.goTo}>Далее</button>
        </div>
    )

}
