import React from "react";
import Filter from "./Filter";
import Offers from "./Offers";

export default function Tickets() {
    return (
        <div className='ticket-results'>
            <Filter/>
            <Offers/>
        </div>
    )
}
