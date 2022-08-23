import Wagon1 from "./components/components/Wagon1";
import React from "react";
import Wagon4 from "./components/components/Wagon4";
import Wagon2 from "./components/components/Wagon2";
import Wagon3 from "./components/components/Wagon3";

import './css/style.css';

export default function WagonPicture(props) {
    let classes = '';
    let showThisWagon = null;

    switch (props.wagonType) {
        case 'first':
            classes = 'railway first';
            showThisWagon = <Wagon1 goNext={props.goNext}
                                    selectSeatFunc={props.selectSeatFunc}
                                    selectedSeatsData={props.selectedSeatsData}/>
            break;

        case 'second':
            classes = 'railway second';
            showThisWagon = <Wagon2 goNext={props.goNext}
                                    selectSeatFunc={props.selectSeatFunc}
                                    selectedSeatsData={props.selectedSeatsData}/>
            break;

        case 'third':
            classes = 'railway third';
            showThisWagon = <Wagon3 goNext={props.goNext}
                                    selectSeatFunc={props.selectSeatFunc}
                                    selectedSeatsData={props.selectedSeatsData}/>
            break;

        case 'fourth':
            classes = 'railway fourth';
            showThisWagon = <Wagon4 goNext={props.goNext}
                                    selectSeatFunc={props.selectSeatFunc}
                                    selectedSeatsData={props.selectedSeatsData}/>
            break;
    }


    return (
        <div className="wagon-picture">
            <div className={classes}>
                <div className="railway-number">1</div>
                <div className="railway-cover">
                    {showThisWagon}
                </div>
            </div>
        </div>
    )
}
