import Seat from "./Seat";
import React from "react";

/**
 * люкс
 */
export default function Wagon1(props) {
    return (
        <>
            <div className='wagon1 railway-seats-list top-row'>
                {buildBlock([1])}
                {buildBlock([2, 3])}
                {buildBlock([4, 5])}
                {buildBlock([6, 7])}
                {buildBlock([8, 9])}
                {buildBlock([10, 11])}
                {buildBlock([12, 13])}
                {buildBlock([14, 15])}
                {buildBlock([16])}
            </div>
        </>
    )

    function buildBlock(arr) {
        let obj = [];
        for (let i = 0; i < arr.length; i++) {
            obj.push(<Seat key={i} wagonType='1' number={arr[i]} selectSeatFunc={props.selectSeatFunc}
                           selectedSeatsData={props.selectedSeatsData}/>)
        }

        return <div className='railway-seats-block'>
            {obj}
        </div>
    }
}
