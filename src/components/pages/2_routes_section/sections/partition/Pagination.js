import './css/style.css';

import arrow_l_pic from './img/left-chevron.png';
import arrow_r_pic from './img/right-chevron.png';
import PaginationItem from "./PaginationItem";
import ApiClient from "../../../../../service/ApiClient";
import cloneFunc from "../../../../../service/CloneFunc";

/**
 * pagination block
 * (routes section)
 */
export default function Pagination(props) {

    let apiClient = new ApiClient();

    let totalCount = props.state.routes.total_count;
    let groups;


    if (totalCount % props.state.filter.limit !== 0) {
        groups = Math.floor(totalCount / props.state.filter.limit) + 1;
    }

    async function arrowHandle(e) {
        let selectedArrow = e.target.dataset.value;
        let changingIndex;

        switch (selectedArrow) {
            case '<-':
                changingIndex = -1;
                break;
            case '->':
                changingIndex = 1;
                break;
            default:
                changingIndex = 0;
        }

        let activePaginationIndex = parseInt(document.querySelector('.pagination_item.active').textContent);

        await paginationHandle(activePaginationIndex + changingIndex);

    }


    async function paginationHandle(e) {
        let selectedValue;
        if (e.target !== undefined && e.target !== null) {
            selectedValue = parseInt(e.target.textContent);
        } else {
            selectedValue = parseInt(e);
        }
        console.log(selectedValue);

        let paginationFilter = props.state.filter;
        paginationFilter.pagination = selectedValue;

        if (selectedValue === '1') {
            paginationFilter.offset = '0';
        } else {
            let offsetIndex = selectedValue - 1;
            paginationFilter.offset = props.state.filter.limit * offsetIndex;
        }

        let routes = await apiClient.getRoutes(paginationFilter);
        let temp = props.state;
        temp.routes = routes;
        temp.filter = paginationFilter;

        let newState = await cloneFunc(temp);
        props.setState(newState);
    }

    let resultToShow = [];

    let startValue = props.state.filter.pagination - 1;
    if (startValue <= 0) startValue = 1;

    let endValue = parseInt(props.state.filter.pagination) + 1;
    if (startValue === 1 && groups >= 3) {
        endValue = 3;
    }

    if (endValue > groups) endValue = groups;

    for (let i = startValue; i <= endValue; i++) {
        if (i === parseInt(props.state.filter.pagination)) {
            resultToShow.push(<PaginationItem key={i} number={i} isActive={true} onClick={paginationHandle}/>)
        } else {
            resultToShow.push(<PaginationItem key={i} number={i} isActive={false} onClick={paginationHandle}/>)
        }
    }


    return (
        <div className='routes_pagination'>
            <img className='pagination_item pagination_left pagination_arrow'
                 src={arrow_l_pic}
                 data-value='<-'
                 onClick={arrowHandle}
                 alt='pagination left arrow'></img>

            {resultToShow}

            <img className='pagination_item pagination_right pagination_arrow'
                 src={arrow_r_pic}
                 data-value='->'
                 onClick={arrowHandle}
                 alt='pagination right arrow'></img>
        </div>
    );
}
