import React from "react";
import DefaultWidget from "./progress/DefaultWidget";
import HorizontalWidget from "./progress/HorizontalWidget";
import Tickets from "../ticketResults/Tickets";

export default function FindTicketWidget(props) {
    if (props.bar) {
        return (
            <>
            <DefaultWidget func={props.func} bar={props.bar}/>
            <Tickets/>
            </>
        )
    } else {
        return <DefaultWidget func={props.func}/>
    }

}
