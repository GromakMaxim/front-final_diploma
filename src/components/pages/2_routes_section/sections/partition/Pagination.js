import './css/style.css';

import arrow_l_pic from './img/left-chevron.png';
import arrow_r_pic from './img/right-chevron.png';
import PaginationItem from "./PaginationItem";
import {useState} from "react";
import ApiClient from "../../../../../service/ApiClient";
import cloneFunc from "../../../../../service/CloneFunc";

/**
 * pagination block
 * (routes section)
 */
export default function Pagination(props) {
    const [number, setNumber] = useState('1');

    let apiClient = new ApiClient();

    let totalCount = props.state.routes.total_count;
    let groups;


    if (totalCount % props.state.filter.limit !== 0){
        groups = Math.floor(totalCount / props.state.filter.limit) + 1;
    }


    async function paginationHandle(e) {
        console.log(e.target.textContent);
        setNumber(e.target.textContent);

        let paginationFilter = props.state.filter;
        paginationFilter.pagination = e.target.textContent;

        if (e.target.textContent === '1') {
            paginationFilter.offset = '0';
        } else {
            let offsetIndex = parseInt(e.target.textContent) - 1;
            let routesOffset = props.state.filter.limit * offsetIndex;
            paginationFilter.offset = routesOffset;
        }

        let routes = await apiClient.getRoutes(paginationFilter);
        let temp = props.state;
        temp.routes = routes;
        temp.filter = paginationFilter;

        let newState = await cloneFunc(temp);
        props.setState(newState);
    }

    let resultToShow = [];

    let startValue = number -1;
    if (startValue <= 0) startValue = 1;

    let endValue = parseInt(number) + 1;
    console.log(startValue + "/" + endValue)
    if (endValue > groups) endValue = groups;

    for (let i = startValue; i <= endValue; i++) {
        if (i === parseInt(number)) {
            resultToShow.push(<PaginationItem key={i} number={i} isActive={true} onClick={paginationHandle}/>)
        } else {
            resultToShow.push(<PaginationItem key={i} number={i} isActive={false} onClick={paginationHandle}/>)
        }
    }


    return (
        <div className='routes_pagination'>
            <div className='pagination_item'>
                <img className='pagination_left pagination_arrow' src={arrow_l_pic} alt='pagination left arrow'></img>
            </div>

            {resultToShow}

            <div className='pagination_item'>
                <img className='pagination_right pagination_arrow' src={arrow_r_pic} alt='pagination right arrow'></img>
            </div>
        </div>
    );
}
