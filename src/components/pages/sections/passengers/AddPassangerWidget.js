import Passenger from "./Passenger";
import React from "react";

export default function AddPassengerWidget(props) {
    return (
        <div className='passenger-wrapper'>
            <Passenger/>
            <button type="button" className="next-page-btn false" onClick={props.goTo}>Далее</button>
        </div>
    )

}
