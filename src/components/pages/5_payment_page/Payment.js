import React from "react";
import PersonalData from "./sections/personal_data/PersonalData";
import PaymentMethods from "./sections/methods/PaymentMethods";

import './css/style.css';

export default function Payment(props) {
    return (
        <section className="order-page-passengers-info order-page-payment-page false">
            <div className="payment-form-wrapper">
                <form className="payment-form">
                    <PersonalData paymentData={props.paymentData} setPaymentData={props.setPaymentData}/>
                    <PaymentMethods paymentData={props.paymentData} setPaymentData={props.setPaymentData}/>
                </form>
                <div className="payment-form-btn">
                    <button type="button" onClick={props.goTo}>Купить билеты</button>
                </div>
            </div>
        </section>
    );
}
