import React from "react";

export default function FeedItem(props) {
    return (
        <div className='feed-item'>
            <img src={props.data.avatar} className='avatar'>

            </img>
            <div>
                <div className='feed-username'>
                    {props.data.name}
                </div>
                <blockquote className='feed-description'>
                    {props.data.descr}
                </blockquote>
            </div>

        </div>
    );
}
