import React from "react";

export default function FIOField(props) {
    return (
        <div>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input id={props.id} name={props.name}
                   type="text" required
                   pattern={props.pattern} defaultValue='' onChange={props.func}/>
        </div>
    );
}
