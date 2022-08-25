import Offer from "./sections/offer/Offer";
import React from "react";

import './sections/offer/css/offer.css';
import './css/style.css';
import FilterTop from "./sections/filter/FilterTop";

export default function OffersPage(props) {
    console.log(props.data)
    let offers = [];
    props.data.items.forEach(item => {
        offers.push(<Offer id={item.departure._id} key={item.departure._id} data={item} goTo={props.goTo}
                           search={props.search}/>);
    })

    return (
        <div className='offers_wrap'>
            <FilterTop total={props.data.items.length}/>
            <div className='offers-list'>
                {offers}
            </div>
        </div>
    );
}
