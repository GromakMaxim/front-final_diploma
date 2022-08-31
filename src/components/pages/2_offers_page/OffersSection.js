import Offer from "./sections/offer/Offer";
import React, {useState} from "react";

import './sections/offer/css/offer.css';
import './css/style.css';
import FilterTop from "./sections/filter/FilterTop";
import ApiClient from "../../../service/ApiClient";

export default function OffersSection(props) {
    const [sort, setSort] = useState(props.state.filter.sort);

    let apiClient = new ApiClient();

    let offers = [];
    if (sort === null || sort === undefined) {
        offers = getOffers(props.state.routes.items);
    } else {
        offers = sortBy(sort);
    }


    function getOffers(arr) {
        console.log(arr)
        if (arr === null || arr === undefined) return null;
        let offers = [];
        arr.forEach(item => {
            offers.push(<Offer id={item.departure._id} key={item.departure._id} data={item} goTo={props.goTo}
                               search={props.search}/>);
        });
        return offers;

    }

    function sortBy(value) {
        let sortFilter = props.state.filter;
        sortFilter.sort = value;

        console.log('sorted routes by: ' + value);
        let routes = apiClient.getRoutes(sortFilter);


        return getOffers(routes.items);
    }

    return (
        <div className='offers_wrap'>
            <FilterTop
                setSort={setSort}
                routes={props.state.routes}/>
            <div className='offers-list'>
                {offers}
            </div>
        </div>
    );
}
