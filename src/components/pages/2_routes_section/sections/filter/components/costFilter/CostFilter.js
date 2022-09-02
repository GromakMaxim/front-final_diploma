import React from "react";
import DoubleSlider from "./slider/DoubleSlider";

import './costFilter.css';

/**
 * фильтр по цене
 */
export default function CostFilter(props) {
    let valueMin;
    let valueMax;
    let routeWithMinPrice = props.state.routes.items
        .sort((a, b) => a.min_price > b.min_price ? 1 : a.min_price < b.min_price ? -1 : 0)[0];

    let routeWithMaxPrice = props.state.routes.items
        .sort((a, b) => a.min_price < b.min_price ? 1 : a.min_price > b.min_price ? -1 : 0)[0];

    if (routeWithMinPrice !== null && routeWithMinPrice !== undefined){
        valueMin = routeWithMinPrice.min_price;
        valueMax = routeWithMaxPrice.min_price;
    }

    return (
        <div className="cost-filter"><h3>Стоимость </h3>
            <div className="from-to-wrapper"><span>от</span><span>до</span></div>
            <DoubleSlider valueMin={valueMin} valueMax={valueMax}/>
        </div>
    );
}
