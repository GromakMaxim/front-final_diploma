import React from "react";
import Progressbar from "./progress/Progressbar";
import DefaultWidget from "./progress/DefaultWidget";
import HorizontalWidget from "./progress/HorizontalWidget";
import Tickets from "../ticketResults/Tickets";
import SeatSelection from "../seatSelection/SeatSelection";

export default class FindTicketWidget extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.show = this.show.bind(this);

        this.state = {showProgressbar: false};


    }

    show() {
        console.log('clicked')
        this.setState({showProgressbar: true});
        console.log(this.state.showProgressbar)
    }

    render() {
        const condition = this.state.showProgressbar;

        let bar = null;
        let widget = <DefaultWidget func = {this.show}/>
        let tickets = <Tickets />;
        if (condition) {
            bar = <Progressbar/>
            widget = <HorizontalWidget />
            tickets = <Tickets />
        }
        return (
            <>
                {widget}
                {bar}
                {tickets}
            </>
        )
    }
}
