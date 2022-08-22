import React from "react";

export default function Feature(props) {
    let descr = null;
    if (props.type === '1') descr = 'Люкс';
    if (props.type === '2') descr = 'Купе';
    if (props.type === '3') descr = 'Плацкарт';
    if (props.type === '4') descr = 'Сидячий';

    return (
        <div className='feature'>
            <div className='type'>
                <span>{descr}</span>
            </div>
            <div className='seats'>{props.seats}</div>
            <div className='cell'>
                <span>от</span>
            </div>

            <div className='price'>
                <span>{props.price}</span>

            </div>
            <div>
                <img src="/images/icon-value.png" alt="russian ruble"/>
            </div>
        </div>
    );
}
