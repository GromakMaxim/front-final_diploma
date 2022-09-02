import Trigger from "./Trigger";
import React from "react";

import './slider.css';

/**
 * группа переключателей в фильтре слева (при выборе направления):
 * купе/плацкарт/сидячий/люкс/wifi/экспресс
 */
export default function Triggers(props) {

    return (
        <div className='triggers'>
            <Trigger state={props.state}
                     setState={props.setState}
                     name='купе'
                     pic='/images/icon-second-class.png'
                     filterCriteria='have_second_class'/>
            <Trigger state={props.state}
                     setState={props.setState}
                     name='плацкарт'
                     pic='/images/icon-third-class.png'
                     filterCriteria='have_third_class'/>
            <Trigger state={props.state}
                     setState={props.setState}
                     name='сидячий'
                     pic='/images/icon-fourth-class.png'
                     filterCriteria='have_fourth_class'/>
            <Trigger state={props.state}
                     setState={props.setState}
                     name='люкс'
                     pic='/images/icon-first-class.png'
                     filterCriteria='have_first_class'/>
            <Trigger state={props.state}
                     setState={props.setState}
                     name='Wi-Fi'
                     pic='/images/icon-wifi.png'
                     filterCriteria='have_wifi'/>
            <Trigger state={props.state}
                     setState={props.setState}
                     name='экспресс'
                     pic='/images/icon-express.png'
                     filterCriteria='have_express'/>
        </div>
    )
}
