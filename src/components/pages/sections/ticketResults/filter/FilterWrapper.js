import React from "react";
import DateFilter from "./dateFilter/DateFilter";
import Triggers from "./triggers/Triggers";
import CostFilter from "./costFilter/CostFilter";

export default function FilterWrapper(props) {
    return (
        <div className='filter'>
            <DateFilter/>
            <Triggers/>
            <CostFilter/>
        </div>
    )

}
