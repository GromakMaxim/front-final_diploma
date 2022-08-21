import React from "react";
import Slider from 'rc-slider';

export default function TimeSlider(props) {

    const marks = {

        24: {
            style: {
                color: 'white',
                marginTop: 10,
            },
            label: '24:00'
        }
    };

    const rails = {
        backgroundColor: 'transparent',
        height: 15,
        borderStyle: 'solid',
        borderWidth: '1px'
    }

    const track = {
        height: 15,
        backgroundColor: '#FFA800',
    }

    const dots = {
        borderColor: 'white',
        height: 15,
        width: 15,
        marginTop: 1,
        backgroundColor: 'white',
    };

    return (
        <div className='time-slider'>
            <div className={'slider-title ' + props.align}>
                <span>{props.title}</span>
            </div>
            <Slider
                range
                allowCross={false}
                draggableTrack={true}
                defaultValue={[6, 15]}
                min={0}
                max={24}

                marks={marks}

                railStyle={rails}
                trackStyle={track}
                handleStyle={dots}


            />
        </div>
    );
}
