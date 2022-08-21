import React from "react";
import HorizontalWidget from "./progress/HorizontalWidget";
import ResultSection from "../ticketResults/ResultSection";
import DefaultWidget from "./progress/DefaultWidget";

export default function FindTicketWidget(props) {
    if (props.bar) {
        return (
            <>
                <HorizontalWidget/>
                <ResultSection/>
            </>
        )
    } else {
        return <DefaultWidget func={props.func}/>
    }

}
