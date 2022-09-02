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

    const dotStyle = {
        display: 'none'
    }


    let maxvalue = props.valueMax;
    let minvalue = props.valueMin;
    const marksProps ={
        minvalue: {
            style:{
                color: 'white',
                left: 0,
                top: 15,
                fontSize: 15
            },
            label: <strong>{props.valueMin}</strong>
        },


        maxvalue: {
            style: {
                color: 'white',
                right: -30,
                top: 15,
                fontSize: 15
            },
            label: <strong>{props.valueMax}</strong>,
        },
    }


    function changeHandler(e){

        console.log(e)
    }

    function workaround(e){
        console.log(e)
    }

    return (
        <>
            <Slider
                range

                allowCross={false}
                draggableTrack={true}
                defaultValue={[props.valueMin, props.valueMax]}

                min={parseInt(props.valueMin)}
                max={parseInt(props.valueMax)}
                railStyle={rails}
                trackStyle={track}
                handleStyle={dots}
                marks={marksProps}
                dotStyle={dotStyle}

                onAfterChange={changeHandler}
            />
        </>
    );

}
