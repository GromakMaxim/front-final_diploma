import React, {useState} from "react";
import FilterWrapper from "./filter/FilterWrapper";
import Offers from "./Offers";
import SeatSelection from "../seatSelection/SeatSelection";

export default function ResultSection(props) {


    return (
        <div className='ticket-results'>
            <FilterWrapper/>
            <Offers/>
        </div>
    )


}
