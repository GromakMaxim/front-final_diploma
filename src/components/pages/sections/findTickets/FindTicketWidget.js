import React, {useState} from "react";
import Progressbar from "./progress/Progressbar";
import DefaultWidget from "./progress/DefaultWidget";
import HorizontalWidget from "./progress/HorizontalWidget";
import Tickets from "../ticketResults/Tickets";

export default function FindTicketWidget(props) {
    const [barIsEnabled, showProgressBar] = useState(false);

    return <DefaultWidget/>
}
