import React, {useState} from 'react';

export default function Seat(props) {
    const [isSelected, selectSeat] = useState(false);

    let classes = "railway-seat available ";



    function clickHandler() {
        let set = props.selectedSeatsData;
        set.add(props.number);
        props.selectSeatFunc(set);
        console.log('number clicked: ' + props.number);

        selectSeat(!isSelected);
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

    if (isSelected){
        return <div className={classes + ' selected'} aria-hidden="true" onClick={clickHandler}>{props.number}</div>;
    } else {
        return <div className={classes} aria-hidden="true" onClick={clickHandler}>{props.number}</div>;
    }
}
