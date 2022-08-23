import React from "react";

export default function Step(props) {
    let classes = `action-plan_item-image ` + props.pic;

    return (
        <div className="action-plan_item">
            <div className={classes}/>
            {props.children}
        </div>
    )
}
