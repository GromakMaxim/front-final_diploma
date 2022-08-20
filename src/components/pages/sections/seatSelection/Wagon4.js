import Seat from "./Seat";
import React from "react";

/**
 * сидячий
 */
export default function Wagon4(props) {

    let classes = 'railway-seats-block wagon4'
    return (
        <>
            <div className='wagon4 railway-seats-list top-row'>
                {buildBlock([1, 2])}
                {buildBlock([3, 4])}
                {buildBlock([5, 6])}
                {buildBlock([7, 8])}
                {buildBlock([9, 10])}
                {buildBlock([11, 12])}
                {buildBlock([13, 14])}
                {buildBlock([15, 16])}
                {buildBlock([17, 18])}
                {buildBlock([19, 20])}
                {buildBlock([21, 22])}
                {buildBlock([23, 24])}
                {buildBlock([25, 26])}
                {buildBlock([27, 28])}
                {buildBlock([29, 30])}
                {buildBlock([31, 32])}
            </div>

            <div className='wagon4 railway-seats-list top-row'>
                {buildBlock([33])}
                {buildBlock([34, 35])}
                {buildBlock([36, 37])}
                {buildBlock([38, 39])}
                {buildBlock([40, 41])}
                {buildBlock([42, 43])}
                {buildBlock([44, 45])}
                {buildBlock([46, 47])}
                {buildBlock([48, 49])}
                {buildBlock([50, 51])}
                {buildBlock([52, 53])}
                {buildBlock([54, 55])}
                {buildBlock([56, 57])}
                {buildBlock([58, 59])}
                {buildBlock([60, 61])}
                {buildBlock([62])}
            </div>
        </>


    )

    function buildBlock(arr) {
        let obj = [];
        for (let i = 0; i < arr.length; i++) {
            obj.push(<Seat key={i} wagonType='4' number={arr[i]} selectSeatFunc={props.selectSeatFunc}
                           selectedSeatsData={props.selectedSeatsData}/>)
        }

        return <div className='railway-seats-block wagon4'>
            {obj}
        </div>
    }
}
