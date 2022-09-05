import Wagon1 from "./components/components/Wagon1";
import React from "react";
import Wagon4 from "./components/components/Wagon4";
import Wagon2 from "./components/components/Wagon2";
import Wagon3 from "./components/components/Wagon3";

import './css/style.css';

/**
 * изображение вагона и кликабельные места
 * (экран выбора мест)
 */
export default function WagonPicture(props) {
    let classes = '';
    let showThisWagon = null;

    switch (props.state.wagon.coach.class_type) {
        case 'first':
            classes = 'railway first';
            showThisWagon = <Wagon1 state={props.state} setState={props.setState} goNext={props.goNext}/>
            break;

        case 'second':
            classes = 'railway second';
            showThisWagon = <Wagon2 state={props.state} setState={props.setState} goNext={props.goNext}/>
            break;

        case 'third':
            classes = 'railway third';
            showThisWagon = <Wagon3 state={props.state} setState={props.setState} goNext={props.goNext}/>
            break;

        case 'fourth':
            classes = 'railway fourth';
            showThisWagon = <Wagon4 state={props.state} setState={props.setState} goNext={props.goNext}/>
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
