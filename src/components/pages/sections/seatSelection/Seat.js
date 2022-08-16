import React, {useState} from 'react';

export default function Seat (props) {
    let classes = "railway-seat available "

    switch (props.wagonType) {
        case '1':
            classes = classes + 'wagon1';
            break;

        case '2':
            classes = classes + 'wagon2';
            break;

        case '3':
            classes = classes + 'wagon3';
            break;

        case '4':
            classes = classes + 'wagon4';
            break;
    }

    return (
        <div className={classes} aria-hidden="true" onClick={props.selectSeatFunc}>{props.number}</div>
    )
}
