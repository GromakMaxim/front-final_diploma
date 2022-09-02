import Offer from "./sections/offer/Offer";
import React, {useState} from "react";

import './sections/offer/css/offer.css';
import './css/style.css';
import FilterTop from "./sections/filter/FilterTop";
import ApiClient from "../../../service/ApiClient";
import cloneFunc from "../../../service/CloneFunc";

export default function RoutesSection(props) {
    console.log(props.state.routes)

    let apiClient = new ApiClient();

    let offers = [];
    props.state.routes.items.forEach(item => {
        offers.push(<Offer id={item.departure._id} key={item.departure._id} data={item} goTo={props.goTo}
                           search={props.search}/>);
    });


    async function sort(value) {
        let sortFilter = props.state.filter;
        sortFilter.sort = value;

        console.log('sorted routes by: ' + value);
        let routes = await apiClient.getRoutes(sortFilter);

        let temp = props.state;
        temp.routes = routes;

        let newState = await cloneFunc(temp);
        props.setState(newState);
    }

    return (
        <div className='offers_wrap'>
            <FilterTop
                sort={sort}
                state={props.state}/>
            <div className='offers-list'>
                {offers}
            </div>
        </div>
    );
}
