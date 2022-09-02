import React from "react";
import TimeFilter from "./TimeFilter";

import icon_arrival from './img/icon-arrival.png';
import icon_departure from './img/icon-departure.png';

export default function ThereAndBack(props) {
    return (
        <div className='time-filters'>
            <TimeFilter title='Туда' icon={icon_arrival}/>
            <TimeFilter title='Обратно' icon={icon_departure}/>
        </div>
    );
}
