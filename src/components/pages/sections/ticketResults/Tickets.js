import React from "react";
import FilterWrapper from "./filter/FilterWrapper";
import Offers from "./Offers";
import SeatSelection from "../seatSelection/SeatSelection";

export default function Tickets() {
    return (
        <div className='ticket-results'>
            <FilterWrapper/>

            <SeatSelection/>
        </div>
    )
}
