import PaymentFIOSection from "./components/PaymentFIOSection";
import PhoneField from "./components/PhoneField";
import EmailField from "./components/EmailField";
import React from "react";

export default function PersonalData(props) {
    function nameInputHandle(e) {
        let obj = props.paymentData;
        obj.name = e.target.value;
        props.setPaymentData(obj);
        console.log(props.paymentData);
    }

    function surnameInputHandle(e) {
        let obj = props.paymentData;
        obj.surname = e.target.value;
        props.setPaymentData(obj);
        console.log(props.paymentData);
    }

    function patronymicInputHandle(e) {
        let obj = props.paymentData;
        obj.patronymic = e.target.value;
        props.setPaymentData(obj);
        console.log(props.paymentData);
    }

    function phoneInputHandler(e){
        let obj = props.paymentData;
        obj.phone = e.target.value;
        props.setPaymentData(obj);
        console.log(props.paymentData);
    }

    function emailInputHandler(e){
        let obj = props.paymentData;
        obj.email = e.target.value;
        props.setPaymentData(obj);
        console.log(props.paymentData);
    }

    return (
        <div className="payment-user-section">
            <div className="payment-form-title">Персональные данные</div>
            <PaymentFIOSection funcName={nameInputHandle}
                               funcSurname={surnameInputHandle}
                               funcPatronymic={patronymicInputHandle}/>
            <div className="payment-contact-section">
                <PhoneField func={phoneInputHandler}/>
                <EmailField func={emailInputHandler}/>
            </div>
        </div>
    )
}
