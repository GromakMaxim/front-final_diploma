import Wagon2 from "./Wagon2";
import React from "react";
import Seat from "../seats/Seat";

/**
 * плацкарт
 */
export default function Wagon3(props) {
    return (
        <>
            <Wagon2/>
            <div className='wagon3 railway-seats-list bottom-row'>
                {buildBlock([33, 34])}
                {buildBlock([35, 36])}
                {buildBlock([37, 38])}
                {buildBlock([39, 40])}
                {buildBlock([41, 42])}
                {buildBlock([43, 44])}
                {buildBlock([45, 46])}
                {buildBlock([47, 48])}
            </div>
        </>
    )

    function buildBlock(arr) {
        let obj = [];
        for (let i = 0; i < arr.length; i++) {
            obj.push(<Seat key={i} wagonType='3' number={arr[i]} goNext={props.goNext}
                           selectSeatFunc={props.selectSeatFunc}
                           selectedSeatsData={props.selectedSeatsData}/>)
        }

        return <div className='railway-seats-block'>
            {obj}
        </div>
    }
}
