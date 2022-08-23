import Passenger from "./components/Passenger";
import React from "react";

import './css/style.css';

export default function AddPassengerWidget(props) {
    let arr = [];

    let passengerNumber = 1;
    props.selectedSeatsData.forEach(seat => {
        arr.push(<Passenger key={seat}
                            number={passengerNumber}
                            selectPassengersFunc={props.selectPassengersFunc}
                            selectedPassengersData={props.selectedPassengersData}/>);
        passengerNumber++;
    })


    return (
        <div className='passenger-wrapper'>
            {arr}
            <button type="button" className="next-page-btn false" onClick={props.goTo}>Далее</button>
        </div>
    )

}
