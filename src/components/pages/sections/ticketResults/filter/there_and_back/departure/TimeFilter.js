import React from "react";

export default function TimeFilter(props){
    return (
        <div className="time-filter">
            <div className="time-filter-top">
                <div className="time-filter-title">
                    <div className="time-icon">
                        <img src={props.icon} alt="icon arrow-right"/>
                    </div>
                    <div className="time-name">{props.title}</div>
                </div>
                <div className="time-filter-btn"/>
            </div>
        </div>
    )
}
