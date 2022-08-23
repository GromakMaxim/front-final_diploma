import Offer from "./sections/offer/Offer";
import React from "react";

import './sections/offer/css/offer.css';
import './css/style.css';

export default function OffersPage(props) {

    let offers = [];
    props.data.items.forEach(item => {
        offers.push(<Offer id={item.departure._id} key={item.departure._id} data={item} goTo={props.goTo}
                           search={props.search}/>);
    })

    return (
        <div className='offers-list'>
            {offers}
        </div>
    );
}
