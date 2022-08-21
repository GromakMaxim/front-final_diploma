import React from "react";
import DoubleSlider from "./slider/DoubleSlider";

export default function CostFilter(props) {
    return (
        <div className="cost-filter"><h3>Стоимость </h3>
            <div className="from-to-wrapper"><span>от</span><span>до</span></div>
            <DoubleSlider valueMin='0' valueMax='1000'/>
        </div>
    );
}
