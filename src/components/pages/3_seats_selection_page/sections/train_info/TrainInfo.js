import React from "react";
import {format, intervalToDuration} from "date-fns";

import arrow_black_pic from './img/arrow-black.png'
import arrow_gold_pic from './img/arrow-gold-right.png'
import train_pic from './img/icon-train-small.png'
import clock_pic from './img/icon-clock.png';

import './css/style.css';

/**
 * brief information about the chosen direction
 * (экран выбора мест)
 */
export default function TrainInfo(props) {
    let route = props.state.route;
    let cityFrom = route.departure.train.name;
    let stationFrom = route.departure.from.railway_station_name;

    let cityTo = route.departure.to.city.name;
    let stationTo = route.departure.to.railway_station_name;

    function getTime(timestamp) {
        return format(new Date(timestamp), "hh:mm");
    }

    function getDuration() {
        let seconds = route.departure.duration;
        let dateObj = intervalToDuration({start: 0, end: seconds * 1000})
        return dateObj.hours + ":" + dateObj.minutes;
    }

    return (
        <div className="seat-selection-ticket-info">
            <div className="train-info">
                <div className="train-icon">
                    <img src={train_pic} alt="icon train small" width="30" height="30"/>
                </div>
                <div className="train-name">
                    <div className="train-number">{route.departure.train.name}</div>
                    <div className="train-departure-city">
                        <div className="departure-select-city">
                            <span>{cityFrom}</span>
                            <img src={arrow_black_pic} alt="arrow"/>
                        </div>
                    </div>
                    <div className="train-arrival-city">{cityTo}</div>
                </div>
            </div>
            <div className="departure-info">
                <div className="train-departure">
                    <span
                        className="departure-from-datetime datetime">{getTime(route.departure.from.datetime)}</span>
                    <span className="departure-from-city">{cityFrom}</span>
                    <span className="departure-from-railway_station railway_station">{stationFrom}</span>
                </div>
                <div className="departure-arrow">
                    <img src={arrow_gold_pic} alt="arrow"/>
                </div>
                <div className="train-arrival">
                    <span
                        className="arrival-from-datetime datetime">{getTime(route.departure.from.datetime)}</span>
                    <span className="arrival-from-city">{cityTo}</span>
                    <span className="arrival-from-railway_station railway_station">{stationTo}</span>
                </div>
            </div>
            <div className="duration-info">
                <div className="duration-icon">
                    <img src={clock_pic} alt="icon clock icon" width="30" height="30"/>
                </div>
                <div className="duration-formatting">
                    <div>{getDuration()}</div>
                </div>
            </div>
        </div>
    );
}
