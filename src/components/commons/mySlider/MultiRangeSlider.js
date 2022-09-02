import React, {useCallback, useEffect, useRef, useState} from "react";
import "./custom.css";
import ApiClient from "../../../service/ApiClient";
import cloneFunc from "../../../service/CloneFunc";

export default function MultiRangeSlider({state, setState, min, max, onChange}) {

    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const range = useRef(null);

    let apiClient = new ApiClient();

    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(parseInt(maxValRef.current.value));

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(parseInt(minValRef.current.value));
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({min: minVal, max: maxVal});
    }, [minVal, maxVal, onChange]);


    async function selectRange() {
        let filter = state.filter;
        filter.price_from = minVal;
        filter.price_to = maxVal;

        console.log('filtered routes by price: ' + minVal + '/' + maxVal);
        let routes = await apiClient.getRoutes(filter);
        let temp = state;
        temp.routes = routes;
        temp.filter = filter;

        let newState = await cloneFunc(temp);
        setState(newState);
    }

    return (
        <div className="custom_container">
            <input className='thumb'
                   type="range"
                   min={min}
                   max={max}
                   value={minVal}
                   ref={minValRef}
                   onChange={(event) => {
                       const value = Math.min(parseInt(event.target.value), maxVal - 1);
                       setMinVal(value);
                       event.target.value = value.toString();
                   }}
                   onMouseUp={selectRange}

            />
            <input className='thumb'
                   type="range"
                   min={min}
                   max={max}
                   value={maxVal}
                   ref={maxValRef}
                   onChange={(event) => {
                       const value = Math.max(parseInt(event.target.value), minVal + 1);
                       setMaxVal(value);
                       event.target.value = value.toString();
                   }}
                   onMouseUp={selectRange}
            />

            <div className="custom_slider">
                <div className="custom_slider__track"/>
                <div ref={range} className="custom_slider__range"/>
                <div className="custom_slider__left-value">{minVal}</div>
                <div className="custom_slider__right-value">{maxVal}</div>
            </div>
        </div>
    );
};
