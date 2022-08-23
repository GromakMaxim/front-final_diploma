import React from "react";
import {format, intervalToDuration} from 'date-fns'
import FeaturesList from "../feature/FeaturesList";

export default function Offer(props) {

    async function clickHandler() {
        await props.search(props.id);
        await props.goTo();
    }

    function getTime(timestamp) {
        return format(new Date(timestamp), "hh:mm");
    }

    function getDuration() {
        let seconds = props.data.departure.duration;
        let dateObj = intervalToDuration({start: 0, end: seconds * 1000})
        return dateObj.hours + ":" + dateObj.minutes;
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
                <div className='offer-from'>
                    <div className='time'>{getTime(props.data.departure.from.datetime)}</div>
                    <div className='wrap'>
                        <div className='city'>{props.data.departure.from.city.name}</div>
                        <div className='station'>{props.data.departure.from.railway_station_name}</div>
                    </div>
                </div>
                <div className='wrap'>
                    <div className='diff'>{getDuration()}</div>
                    <img src="/images/arrow-gold-right.png" alt="arrow"/>
                </div>
                <div className='offer-to'>
                    <div className='time'>{getTime(props.data.departure.to.datetime)}</div>
                    <div className='wrap'>
                        <div className='city'>{props.data.departure.to.city.name}</div>
                        <div className='station'>{props.data.departure.to.railway_station_name}</div>
                    </div>
                </div>

            </div>
            <div className='right'>
                <FeaturesList data={props.data.departure}/>
                <button className="btn-seat-selection" onClick={clickHandler}>Выбрать места</button>
            </div>
        </div>
    );
}
