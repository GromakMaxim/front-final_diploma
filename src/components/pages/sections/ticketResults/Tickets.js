import React from "react";
import FilterWrapper from "./filter/FilterWrapper";
import Offers from "./Offers";

export default function Tickets() {
    return (
        <div className='ticket-results'>
            <FilterWrapper/>
            <Offers/>
        </div>
    )
}
