import React from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './slider.css';

export default function DoubleSlider(props) {

    const rails = {
        backgroundColor: 'transparent',
        height: 25,
        borderStyle: 'solid',
        borderWidth: '1px'
    }

    const track = {
        height: 25,
        backgroundColor: '#FFA800',
    }

    const dots = {
        borderColor: 'white',
        height: 25,
        width: 25,
        marginTop: 1,
        backgroundColor: 'white',
    };


    return (
        <>
            <Slider
                range
                allowCross={false}
                draggableTrack={true}
                defaultValue={[500, 800]}

                step='1'
                min={parseInt(props.valueMin)}
                max={parseInt(props.valueMax)}

                railStyle={rails}
                trackStyle={track}
                handleStyle={dots}
            />
        </>
    );

}
