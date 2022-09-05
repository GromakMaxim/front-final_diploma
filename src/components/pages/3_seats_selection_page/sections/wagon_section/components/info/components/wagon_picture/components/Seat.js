import React, {useState} from 'react';

export default function Seat(props) {
    const [isSelected, selectSeat] = useState(false);

    let classes = "railway-seat ";

    let isExists = props.state.seats[props.number-1];
    if (isExists){
        let isAvailable = props.state.seats[props.number-1].available;
        if (isAvailable){
            classes = classes + ' available ';
        }
    }

    function clickHandler() {
        let set = props.state.selectedSeats;
        if (set.has(props.number)) {
            set.delete(props.number);
            console.log('turn off number:' + props.number);
        } else {
            set.add(props.number);
            console.log('turn on number: ' + props.number);
        }

        let temp = props.state;
        temp.selectedSeats = set;

        selectSeat(!isSelected);

        if (set.size !== 0) props.goNext(true);
        if (set.size === 0) props.goNext(false);
    }

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

    if (isSelected) {
        return <div className={classes + ' selected'} aria-hidden="true" onClick={clickHandler}>{props.number}</div>;
    } else {
        return <div className={classes} aria-hidden="true" onClick={clickHandler}>{props.number}</div>;
    }
}
