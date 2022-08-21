import React from "react";

export default function Method(props){
    let btn = null;
    if (props.checked){
        btn = <input type='checkbox' onClick={props.clickHandle} value={props.value} checked/>
    } else {
        btn = <input type='checkbox' onClick={props.clickHandle} value={props.value}/>
    }

    return (
        <div className={props.classes}>
            {btn}
            <span>{props.span}</span>
        </div>
    )
}
