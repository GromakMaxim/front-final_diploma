import React from "react";
import {format, intervalToDuration} from 'date-fns'
import FeaturesList from "../feature/FeaturesList";

import train_pic from './img/train.png';
import arrow_b_pic from './img/arrow-black.png';
import arrow_g_pic from './img/arrow-gold-right.png';
import ApiClient from "../../../../../service/ApiClient";
import cloneFunc from "../../../../../service/CloneFunc";

/**
 * one of the directions(routes) available for selection
 */
export default function Route(props) {
    let apiClient = new ApiClient();

    async function clickHandler() {
        let foundSeats = await apiClient.getSeats(props.id);
        console.log(foundSeats);
        let temp = props.state;
        temp.route = props.data;
        temp.wagons = foundSeats;
        temp.wagon = foundSeats[0];
        temp.seats = foundSeats[0].seats;
        temp.display = 'seats';

        let newState = await cloneFunc(temp);
        props.setState(newState);
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
        <div className='route'>
            <div className='left'>
                <img src={train_pic} alt='some picture'/>
                <div className='train-name'>{props.data.departure.train.name}</div>
                <div className='from-to-wrap'>
                    <div className='from-station'>{props.data.departure.from.railway_station_name}
                        <img src={arrow_b_pic} alt="arrow"/>
                    </div>

                    <div className='to-station'>{props.data.departure.to.railway_station_name}</div>
                </div>
            </div>
            <div className='center'>
                <div className='route-from'>
                    <div className='time'>{getTime(props.data.departure.from.datetime)}</div>
                    <div className='wrap'>
                        <div className='city'>{props.data.departure.from.city.name}</div>
                        <div className='station'>{props.data.departure.from.railway_station_name}</div>
                    </div>
                </div>
                <div className='wrap'>
                    <div className='diff'>{getDuration()}</div>
                    <img src={arrow_g_pic} alt="arrow"/>
                </div>
                <div className='route-to'>
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
