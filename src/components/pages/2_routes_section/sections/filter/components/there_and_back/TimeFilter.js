import React, {useState} from "react";
import TimeSlider from "./TimeSlider";

import './css/timeFilter.css';
import './css/timeSlider.css';

export default function TimeFilter(props) {
    const [opened, setOpened] = useState(false);

    function handler() {
        console.log('clicked')
        if (opened) setOpened(false);
        if (!opened) setOpened(true);
    }

    const commonPart = <div className="time-filter-top">
        <div className="time-filter-title">
            <div className="time-icon">
                <img src={props.icon} alt="icon arrow-right"/>
            </div>
            <div className="time-name">{props.title}</div>
        </div>
        <div className="time-filter-btn" onClick={handler}/>
    </div>;

    if (opened) {
        return (
            <div className="time-filter">
                {commonPart}

                <TimeSlider title='Время отбытия' align='left'/>
                <TimeSlider title='Время прибытия' align='right'/>
            </div>
        )
    } else {
        return (
            <div className="time-filter">
                {commonPart}
            </div>
        )
    }


}
