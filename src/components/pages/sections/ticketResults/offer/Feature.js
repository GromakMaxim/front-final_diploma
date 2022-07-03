import React from "react";

export default function Feature(props) {
    let descr = null;
    if (props.type === '1') descr = 'Люкс';
    if (props.type === '2') descr = 'Купе';
    if (props.type === '3') descr = 'Плацкарт';
    if (props.type === '4') descr = 'Сидячий';

    return (
        <tr className='feature'>
            <td className='type'>
                <span>{descr}</span>
            </td>
            <td className='seats'>{props.seats}</td>
            <td>
                <span>от</span>
            </td>

            <td className='price'>
                <span>{props.price}</span>

            </td>
            <td>
                <img src="/images/icon-value.png" alt="russian ruble"/>
            </td>
        </tr>
    );
}
