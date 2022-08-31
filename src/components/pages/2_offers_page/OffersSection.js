import Offer from "./sections/offer/Offer";
import React, {useState} from "react";

import './sections/offer/css/offer.css';
import './css/style.css';
import FilterTop from "./sections/filter/FilterTop";

export default function OffersSection(props) {
    const [sort, setSort] = useState();

    let offers = [];
    switch (sort) {
        case 'cost':
            offers = sortByCost();
            break
        case 'duration':
            offers = sortByDuration();
            break;
        case 'time':
            offers = sortByTime();
            break;
        default:
            offers = getOffers(props.state.routes.items);

    }

    function getOffers(arr) {
        if (arr === null || arr === undefined) return null;
        let offers = [];
        arr.forEach(item => {
            offers.push(<Offer id={item.departure._id} key={item.departure._id} data={item} goTo={props.goTo}
                               search={props.search}/>);
        });
        return offers;

    }

    function sortByCost() {
        console.log('sorted by cost: desc');
        let sorted = props.routes.items.sort((item1, item2) => (item1.departure.min_price > item2.departure.min_price) ? 1 : (item1.departure.min_price < item2.departure.min_price) ? -1 : 0);
        let obj = props.routes;
        obj.items = sorted;
        props.setOffersData(obj);

        return getOffers(sorted);
    }

    function sortByDuration() {
        console.log('sorted by duration: desc');
        let sorted = props.routes.items.sort((item1, item2) => item1.departure.duration > item2.departure.duration ? 1 : item1.departure.duration < item2.departure.duration ? -1 : 0);
        let obj = props.routes;
        obj.items = sorted;
        props.setOffersData(obj);

        return getOffers(sorted);
    }

    function sortByTime() {
        console.log('sorted by time: desc');
        let sorted = props.routes.items.sort((item1, item2) => item1.departure.from.datetime > item2.departure.from.datetime ? 1 : item1.departure.from.datetime < item2.departure.from.datetime ? -1 : 0);
        let obj = props.routes;
        obj.items = sorted;
        props.setOffersData(obj);

        return getOffers(sorted);
    }

    return (
        <div className='offers_wrap'>
            <FilterTop
                setSort={setSort}
                routes={props.routes}/>
            <div className='offers-list'>
                {offers}
            </div>
        </div>
    );
}
