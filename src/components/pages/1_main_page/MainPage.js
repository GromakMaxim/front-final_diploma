import React, {useState} from "react";

import './css/mainPage.css';
import MiddleSection from "./sections/MiddleSection";
import TopSection from "./sections/TopSection";
import LowSection from "./sections/LowSection";

export default function MainPage(props) {
    const [state, setState] = useState(
        {
            /**
             * default -> routes -> seats -> passengers - > payment -> confirm -> thnx
             * (defines what actually to display in middle section)
             */
            display: 'default',

            /**
             * available routes according current sorting/filters
             */
            routes: null,

            /**
             * selected route
             */
            route: null,

            /**
             * available wagons
             */
            wagons: null,

            /**
             * selected wagon
             */
            wagon: null,

            /**
             * current sort type/filters
             */
            filter: null,

            /**
             * available seats in selected route
             */
            seats: null,

            /**
             * user-selected seats
             */
            selectedSeats: new Set(),

            /**
             * each passenger info
             */
            passengers: new Set(),

            /**
             * user data from the payment page
             */
            paymentDetails: null,
        }
    )


    let classes = null;
    if (state.display === 'default') {
        classes = 'main-page bgr1';
    } else {
        classes = 'main-page bgr2';
    }

    return (
        <div className={classes}>
            <TopSection setState={setState} state={state}/>
            <MiddleSection setState={setState} state={state}/>
            <LowSection setState={setState} state={state}/>
        </div>
    );
}
