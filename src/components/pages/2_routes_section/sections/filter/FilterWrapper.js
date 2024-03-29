import React from "react";
import DateFilter from "./components/dateFilter/DateFilter";
import Triggers from "./components/triggers/Triggers";
import CostFilter from "./components/costFilter/CostFilter";
import ThereAndBack from "./components/there_and_back/ThereAndBack";

import './css/filter.css';

/**
 * changing section with filter on the left
 */
export default function FilterWrapper(props) {


    return (
        <div className='filter'>
            <DateFilter/>
            <Triggers state={props.state} setState={props.setState}/>
            <CostFilter state={props.state} setState={props.setState}/>
            <ThereAndBack/>
        </div>
    )

}
