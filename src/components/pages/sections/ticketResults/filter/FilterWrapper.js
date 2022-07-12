import React from "react";
import DateFilter from "./dateFilter/DateFilter";
import Triggers from "./triggers/Triggers";
import CostFilter from "./costFilter/CostFilter";
import ThereAndBack from "./there_and_back/ThereAndBack";

export default function FilterWrapper(props) {
    return (
        <div className='filter'>
            <DateFilter/>
            <Triggers/>
            <CostFilter/>
            <ThereAndBack/>
        </div>
    )

}
