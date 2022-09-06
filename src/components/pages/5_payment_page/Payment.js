import React, {useState} from "react";
import PersonalData from "./sections/personal_data/PersonalData";
import PaymentMethods from "./sections/methods/PaymentMethods";

import './css/style.css';
import cloneFunc from "../../../service/CloneFunc";
import UserPaymentData from "./dataObject/UserPaymentData";

/**
 * payment data filling screen
 */
export default function Payment(props) {
    console.log(props.state);
    const [paymentData, setPaymentData] = useState(new UserPaymentData());

    async function clickButTicketsHandle(){
        if (paymentData){
            let temp = props.state;
            temp.paymentData = paymentData;
            temp.display = 'confirm';

            let newState = await cloneFunc(temp);
            props.setState(newState);
        }
    }

    let btnNext = <button type="button" className='payment-form-btn'>Купить билеты</button>
    if (paymentData){
        btnNext = <button type="button" className='payment-form-btn active' onClick={clickButTicketsHandle}>Купить билеты</button>
    }

    return (
        <section className="order-page-passengers-info order-page-payment-page false">
            <div className="payment-form-wrapper">
                <form className="payment-form">
                    <PersonalData paymentData={paymentData} setPaymentData={setPaymentData}/>
                    <PaymentMethods paymentData={paymentData} setPaymentData={setPaymentData}/>
                </form>
                <div className="payment-form-btn">
                    {btnNext}
                </div>
            </div>
        </section>
    );
}
