import React from "react";
import FilterWrapper from "./filter/FilterWrapper";
import Offers from "./Offers";

export default function ResultSection(props) {


    return (
        <div className='ticket-results'>
            <FilterWrapper/>
            <Offers/>
        </div>
    )


}
