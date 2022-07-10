import React from "react";

export default function Trigger(props) {
    return (
        <div className='trigger'>
            <img src={props.pic} alt=''/>
            <span>{props.name} </span>
            <label className="toggle">
                <input type="checkbox"/>
                <span className="slider round"/>
            </label>
        </div>
    );
}
