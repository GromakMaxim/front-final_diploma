import Route from "./sections/route/Route";
import React from "react";

import './sections/route/css/style.css';
import './css/style.css';
import FilterTop from "./sections/filter/FilterTop";
import ApiClient from "../../../service/ApiClient";
import cloneFunc from "../../../service/CloneFunc";

/**
 * screen with a choice of directions(routes), according to the filter
 */
export default function RoutesSection(props) {
    console.log(props.state)

    let apiClient = new ApiClient();

    let routes = [];
    props.state.routes.items.forEach(item => {
        routes.push(<Route id={item.departure._id}
                           key={item.departure._id}
                           data={item}
                           state={props.state}
                           setState={props.setState}/>
        );
    });

    async function sort(value) {
        let sortFilter = props.state.filter;
        sortFilter.sort = value;

        console.log('sorted routes by: ' + value);
        let routes = await apiClient.getRoutes(sortFilter);

        let temp = props.state;
        temp.routes = routes;
        temp.filter = sortFilter;

        let newState = await cloneFunc(temp);
        props.setState(newState);
    }

    return (
        <div className='routes_wrap'>
            <FilterTop
                sort={sort}
                state={props.state}/>
            <div className='routes-list'>
                {routes}
            </div>
        </div>
    );
}
