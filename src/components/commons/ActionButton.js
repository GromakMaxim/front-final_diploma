import React from "react";

export default function ActionButton(props){
    let cssStyle = {
        textAlign: "center",
        color: "#fff",
        fontSize: "24px",
        fontWeight: "700",
        backgroundColor: "#FFA800",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        padding: "6px 13px 9px 9px",
    }

    return(
        <button style={cssStyle} className="action-btn" onClick={props.goTo}>{props.title}</button>
    )
}
