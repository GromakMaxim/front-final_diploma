import PaymentFIOSection from "../PaymentFIOSection";
import PhoneField from "../fields/PhoneField";
import EmailField from "../fields/EmailField";
import React from "react";

export default function PersonalData(props){
    return (
        <div className="payment-user-section">
            <div className="payment-form-title">Персональные данные</div>
            <PaymentFIOSection/>
            <div className="payment-contact-section">
                <PhoneField/>
                <EmailField/>
            </div>
        </div>
    )
}
