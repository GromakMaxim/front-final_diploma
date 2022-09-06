import React, {useState} from "react";

import './costFilter.css';
import MultiRangeSlider from "../../../../../../commons/mySlider/MultiRangeSlider";

/**
 * filter by cost
 */
export default function CostFilter(props) {
    let valueMin;
    let valueMax;
    let routeWithMinPrice = props.state.routes.items
        .sort((a, b) => a.min_price > b.min_price ? 1 : a.min_price < b.min_price ? -1 : 0)[0];

    let routeWithMaxPrice = props.state.routes.items
        .sort((a, b) => a.min_price < b.min_price ? 1 : a.min_price > b.min_price ? -1 : 0)[0];

    if (routeWithMinPrice !== null && routeWithMinPrice !== undefined) {
        valueMin = routeWithMinPrice.min_price;
        valueMax = routeWithMaxPrice.min_price;
    }

    return (
        <div className="cost-filter"><h3>Стоимость </h3>
            <div className="from-to-wrapper"><span>от</span><span>до</span></div>
            <MultiRangeSlider state={props.state} setState={props.setState}
                              min={0}
                              max={valueMax}
                              onChange={() => console.log()}/>
        </div>
    );
}
