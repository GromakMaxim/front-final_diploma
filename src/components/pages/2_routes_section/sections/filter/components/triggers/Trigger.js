import React, {useState} from "react";
import ApiClient from "../../../../../../../service/ApiClient";
import cloneFunc from "../../../../../../../service/CloneFunc";

export default function Trigger(props) {

    let apiClient = new ApiClient();

    async function toggleHandler(e) {
        let isOn = e.target.checked;
        let filter = props.state.filter;
        filter[props.filterCriteria] = isOn;

        console.log('filtered by: ' + props.filterCriteria + ' - ' + isOn);
        let routes = await apiClient.getRoutes(filter);

        let temp = props.state;
        temp.routes = routes;
        temp.filter = filter;

        let newState = await cloneFunc(temp);
        props.setState(newState);
    }

    return (
        <div className='trigger'>
            <img src={props.pic} alt=''/>
            <span>{props.name} </span>
            <label className="toggle">
                <input type="checkbox" onClick={toggleHandler}/>
                <span className="slider round"/>
            </label>
        </div>
    );
}
