import React from "react";
import {format, intervalToDuration} from "date-fns";

import './css/style.css';

export default function TrainInfo(props) {
    let cityFrom = props.trainData.departure.train.name;
    let stationFrom = props.trainData.departure.from.railway_station_name;

    let cityTo = props.trainData.departure.to.city.name;
    let stationTo = props.trainData.departure.to.railway_station_name;

    function getTime(timestamp) {
        return format(new Date(timestamp), "hh:mm");
    }

    function getDuration() {
        let seconds = props.trainData.departure.duration;
        let dateObj = intervalToDuration({start: 0, end: seconds * 1000})
        return dateObj.hours + ":" + dateObj.minutes;
    }

    return (
        <div className="seat-selection-ticket-info">
            <div className="train-info">
                <div className="train-icon">
                    <img src="/images/icon-train-small.png" alt="train icon" width="30" height="30"/>
                </div>
                <div className="train-name">
                    <div className="train-number">{props.trainData.departure.train.name}</div>
                    <div className="train-departure-city">
                        <div className="departure-select-city">
                            <span>{cityFrom}</span>
                            <img src="/images/arrow-black.png" alt="arrow"/>
                        </div>
                    </div>
                    <div className="train-arrival-city">{cityTo}</div>
                </div>
            </div>
            <div className="departure-info">
                <div className="train-departure">
                    <span
                        className="departure-from-datetime datetime">{getTime(props.trainData.departure.from.datetime)}</span>
                    <span className="departure-from-city">{cityFrom}</span>
                    <span className="departure-from-railway_station railway_station">{stationFrom}</span>
                </div>
                <div className="departure-arrow">
                    <img src="/images/arrow-gold-right.png" alt="arrow"/>
                </div>
                <div className="train-arrival">
                    <span
                        className="arrival-from-datetime datetime">{getTime(props.trainData.departure.from.datetime)}</span>
                    <span className="arrival-from-city">{cityTo}</span>
                    <span className="arrival-from-railway_station railway_station">{stationTo}</span>
                </div>
            </div>
            <div className="duration-info">
                <div className="duration-icon">
                    <img src="/images/icon-clock.png" alt="icon-clock" width="30" height="30"/>
                </div>
                <div className="duration-formatting">
                    <div>{getDuration()}</div>
                </div>
            </div>
        </div>
    );
}
