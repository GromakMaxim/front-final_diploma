import React from "react";
import TimeFilter from "./departure/TimeFilter";

export default function ThereAndBack(props) {
    return (
        <div className='time-filters'>
            <TimeFilter title='Туда' icon='/images/icon-departure.png'/>
            <TimeFilter title='Обратно' icon = '/images/icon-arrival.png'/>
        </div>
    );
}
