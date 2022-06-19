import React from "react";

export default function ContactUsItem(props){
    return (
        <div className='contact-us-item'>
            <img src={props.pic}/>
            <span>{props.data}</span>
        </div>
    );
}
