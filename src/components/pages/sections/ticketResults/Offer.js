import React from "react";

export default function Offer(props) {
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
                    <div className='time'>{props.data.departure.from.datetime}</div>
                    <div className='city'>{props.data.departure.from.city.name}</div>
                    <div className='station'>{props.data.departure.from.railway_station_name}</div>
                </div>
                <div className='arrow'></div>
                <div className='to'>
                    <div className='time'>{props.data.departure.to.datetime}</div>
                    <div className='city'>{props.data.departure.to.city.name}</div>
                    <div className='station'>{props.data.departure.to.railway_station_name}</div>
                </div>

            </div>
            <div className='right'>

            </div>
        </div>
    );
}
