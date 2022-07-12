import React from "react";
import TimeFilter from "./TimeFilter";
import TimeSlider from "./TimeSlider";

export default function ThereAndBack(props) {
    return (
        <div className='time-filters'>
            <TimeFilter title='Туда' icon='/images/icon-departure.png'/>
            <TimeFilter title='Обратно' icon = '/images/icon-arrival.png'/>
        </div>
    );
}
