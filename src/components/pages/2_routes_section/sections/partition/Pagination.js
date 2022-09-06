import './css/style.css';

import arrow_l_pic from './img/left-chevron.png';
import arrow_r_pic from './img/right-chevron.png';
import PaginationItem from "./PaginationItem";
import {useState} from "react";

/**
 * pagination block
 * (routes section)
 */
export default function Pagination(props) {
    const [number, setNumber] = useState('1');

    function paginationHandle(e) {
        console.log(e.target.textContent);
        setNumber(e.target.textContent);
    }

    let arr = ['1', '2', '3'];
    let resultToShow = [];
    arr.forEach(item=>{
        if (item === number){
            resultToShow.push(<PaginationItem number={item} isActive={true} onClick={paginationHandle}/>)
        } else {
            resultToShow.push(<PaginationItem number={item} isActive={false} onClick={paginationHandle}/>)
        }
    })

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
