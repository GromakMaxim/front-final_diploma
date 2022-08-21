import Offer from "./offer/Offer";
import React from "react";

export default function Offers(props) {

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
