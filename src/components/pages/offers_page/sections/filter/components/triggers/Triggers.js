import Trigger from "./Trigger";
import React from "react";

import './slider.css';

export default function Triggers(props) {
    return (
        <div className='triggers'>
            <Trigger name='купе' pic='/images/icon-second-class.png'/>
            <Trigger name='плацкарт' pic='/images/icon-third-class.png'/>
            <Trigger name='сидячий' pic='/images/icon-fourth-class.png'/>
            <Trigger name='люкс' pic='/images/icon-first-class.png'/>
            <Trigger name='Wi-Fi' pic='/images/icon-wifi.png'/>
            <Trigger name='экспресс' pic='/images/icon-express.png'/>
        </div>
    )
}
