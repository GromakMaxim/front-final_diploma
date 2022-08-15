import Seat from "./Seat";
import React from "react";

/**
 * люкс
 */
export default function Wagon1(props) {
    return (
        <>
            <div className='wagon1 railway-seats-list top-row'>
                <div className='railway-seats-block'>
                    <Seat wagonType='1' number={1}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat wagonType='1' number={2}/>
                    <Seat wagonType='1' number={3}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat wagonType='1' number={4}/>
                    <Seat wagonType='1' number={5}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat wagonType='1' number={6}/>
                    <Seat wagonType='1' number={7}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat wagonType='1' number={8}/>
                    <Seat wagonType='1' number={9}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat wagonType='1' number={10}/>
                    <Seat wagonType='1' number={11}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat wagonType='1' number={12}/>
                    <Seat wagonType='1' number={13}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat wagonType='1' number={14}/>
                    <Seat wagonType='1' number={15}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat wagonType='1' number={16}/>
                </div>

            </div>
        </>
    )
}
