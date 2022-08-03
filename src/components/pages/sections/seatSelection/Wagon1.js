import Seat from "./Seat";
import React from "react";

export default function Wagon1(props) {
    return (
        <>
            <div className='railway-seats-list top-row'>
                <div className='railway-seats-block'>
                    <Seat number={1}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat number={2}/>
                    <Seat number={3}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat number={4}/>
                    <Seat number={5}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat number={6}/>
                    <Seat number={7}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat number={8}/>
                    <Seat number={9}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat number={10}/>
                    <Seat number={11}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat number={12}/>
                    <Seat number={13}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat number={14}/>
                    <Seat number={15}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat number={16}/>
                </div>

            </div>
        </>
    )
}
