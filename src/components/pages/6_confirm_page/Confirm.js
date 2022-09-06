import React from "react";
import Offer from "../2_routes_section/sections/offer/Offer";
import ActionButton from "../../commons/ActionButton";
import PassengersSection from "./components/PassengersSection";

import './css/style.css';
import cloneFunc from "../../../service/CloneFunc";

/**
 * confirmation screen for all completed information
 */
export default function Confirm(props) {
    console.log(props.state);

    async function goToThnxPage(){
        let temp = props.state;
        temp.display = 'thnx';
        let newState = await cloneFunc(temp);
        props.setState(newState);
    }

    return (
        <section className="confirm-wrapper">
            <section className="verification verification-train">
                <div className="verification-title">Поезд</div>
                <ul className="found-routes-list">
                    <Offer id={props.state.route.departure._id}
                           key={props.state.route.departure._id}
                           data={props.state.route}
                           state={props.state}
                           setState={props.setState}/>
                </ul>
            </section>
            <PassengersSection state={props.state} setState={props.setState}/>

            <section className="verification verification-payment">
                <div className="verification-title">Способ оплаты</div>
                <div className="verification-payment-wrapper">
                    <div className="verification-payment_method">Онлайн</div>
                    <div className="verification-payment-btn">
                        <ActionButton title='Изменить'/>
                    </div>
                </div>
            </section>
            <section className="verification-btn">
                <ActionButton title='Подтвердить' goTo={goToThnxPage}/>
            </section>
        </section>
    );
}
