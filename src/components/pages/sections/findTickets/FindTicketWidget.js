import React from "react";
import HorizontalWidget from "./progress/HorizontalWidget";
import Tickets from "../ticketResults/Tickets";
import DefaultWidget from "./progress/DefaultWidget";

export default function FindTicketWidget(props) {
    if (props.bar) {
        return (
            <>
                <HorizontalWidget/>
                <Tickets/>
            </>
        )
    } else {
        return <DefaultWidget func={props.func}/>
    }

}
