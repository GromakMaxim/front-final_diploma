import Offer from "./offer/Offer";
import React from "react";

export default function Offers(props) {

    let offers = [];
    props.data.items.forEach(item => {
        offers.push(<Offer key={item.departure._id} data={item} goTo={props.goTo}/>);
    })

    return (
        <div className='offers-list'>
            {offers}
        </div>
    );
}
