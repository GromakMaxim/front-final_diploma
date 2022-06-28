import React from "react";

export default function Offer(props) {
    return (
        <div className='offer'>
            <div className='offer-left'>
                <img src='/images/train.png'/>
            </div>
            <div className='offer-right'>

            </div>
            {props.data.departure._id}
        </div>
    );
}
