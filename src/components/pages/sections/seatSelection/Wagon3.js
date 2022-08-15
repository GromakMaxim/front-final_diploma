import Wagon2 from "./Wagon2";
import React from "react";
import Seat from "./Seat";

export default function Wagon3(props){
    return (
        <>
            <Wagon2 />
            <div className='wagon3 railway-seats-list bottom-row'>
                <div className='railway-seats-block'>
                    <Seat number={33}/>
                    <Seat number={34}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat number={35}/>
                    <Seat number={36}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat number={37}/>
                    <Seat number={38}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat number={39}/>
                    <Seat number={40}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat number={41}/>
                    <Seat number={42}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat number={43}/>
                    <Seat number={44}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat number={45}/>
                    <Seat number={46}/>
                </div>
                <div className='railway-seats-block'>
                    <Seat number={47}/>
                    <Seat number={48}/>
                </div>

            </div>
        </>
    )
}
