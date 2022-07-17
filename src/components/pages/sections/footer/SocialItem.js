import React from "react";

export default function SocialItem(props) {
    const classes = "social-link social-link-" + props.data.label

    return (
        <li className="social-item">
            <a className={classes}
               href={props.data.link}
               aria-label={props.data.label}
               aria-hidden="true">{props.data.label}</a>
        </li>
    );
}
