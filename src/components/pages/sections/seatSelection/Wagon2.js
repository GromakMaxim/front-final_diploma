import Seat from "./Seat";
import React from "react";

/**
 * купе
 */
export default function Wagon2(props) {
    return (
        <>
            <div className='wagon2 railway-seats-list top-row'>
                {buildBlock([1, 2])}
                {buildBlock([3, 4, 5, 6])}
                {buildBlock([7, 8, 9, 10])}
                {buildBlock([11, 12, 13, 14])}
                {buildBlock([15, 16, 17, 18])}
                {buildBlock([19, 20, 21, 22])}
                {buildBlock([23, 24, 25, 26])}
                {buildBlock([27, 28, 29, 30])}
                {buildBlock([31, 32])}
            </div>
        </>
    )

    function buildBlock(arr) {
        let obj = [];
        for (let i = 0; i < arr.length; i++) {
            obj.push(<Seat key={i} wagonType='2' number={arr[i]} selectSeatFunc={props.selectSeatFunc}
                           selectedSeatsData={props.selectedSeatsData}/>)
        }

        return <div className='railway-seats-block'>
            {obj}
        </div>
    }

}
