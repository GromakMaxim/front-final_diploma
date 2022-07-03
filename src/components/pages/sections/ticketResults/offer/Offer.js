import React from "react";
import { format, intervalToDuration  } from 'date-fns'
import Features from "./Features";

export default function Offer(props) {

    function getTime(timestamp){
        return  format(new Date(timestamp), "hh:mm");
    }

    function getDuration(){
        let seconds = props.data.departure.duration;
        let dateObj = intervalToDuration({ start: 0, end: seconds * 1000 })
        return dateObj.hours + ":" +  dateObj.minutes;
    }

    return (
        <div className='offer'>
            <div className='left'>
                <img src='/images/train.png'/>
                <div className='train-name'>{props.data.departure.train.name}</div>
                <div className='from-to-wrap'>
                    <div className='from-station'>{props.data.departure.from.railway_station_name}
                        <img src="/images/arrow-black.png" alt="arrow"/>
                    </div>

                    <div className='to-station'>{props.data.departure.to.railway_station_name}</div>
                </div>
            </div>
            <div className='center'>
                <div className='from'>
                    <div className='time'>{getTime(props.data.departure.from.datetime)}</div>
                    <div className='city'>{props.data.departure.from.city.name}</div>
                    <div className='station'>{props.data.departure.from.railway_station_name}</div>
                </div>
                <div className='wrap'>
                    <div className='diff'>{getDuration()}</div>
                    <img src="/images/arrow-gold-right.png" alt="arrow"/>
                </div>
                <div className='to'>
                    <div className='time'>{getTime(props.data.departure.to.datetime)}</div>
                    <div className='city'>{props.data.departure.to.city.name}</div>
                    <div className='station'>{props.data.departure.to.railway_station_name}</div>
                </div>

            </div>
            <div className='right'>
                <Features data = {props.data.departure}/>
            </div>
        </div>
    );
}
