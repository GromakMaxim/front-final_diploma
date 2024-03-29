import React from "react";
import Method from "./components/Method";
import cloneFunc from "../../../../../service/CloneFunc";

/**
 * block for choosing a payment method
 */
export default function PaymentMethods(props) {
    console.log(props.paymentData)

    async function clickHandle(e) {
        let obj = props.paymentData;
        obj.paymentType = e.target.value;

        let newState = await cloneFunc(obj);
        props.setPaymentData(newState);
    }

    let cashBtn = <Method classes='method cash false' clickHandle={clickHandle} value='offline' span='Наличными'/>;
    let onlineBtn = <Method classes='method false' clickHandle={clickHandle} value='online' span='Онлайн'/>;

    switch (props.paymentData.paymentType) {
        case 'online':
            onlineBtn = <Method classes='method online active' clickHandle={clickHandle} value='online' span='Онлайн'
                                checked={true}/>;
            break;

        case 'offline':
            cashBtn = <Method classes='method cash active' clickHandle={clickHandle} value='offline' span='Наличными'
                              checked={true}/>;
            break;

    }


    return (
        <div className="payment-section payment-method">
            <div className="payment-form-title">Способы оплаты</div>
            <section>
                <div className="payment-info_online">
                    {onlineBtn}
                    <div className="online-payment-list">
                        <span>Банковской картой</span>
                        <span>PayPal</span>
                        <span>Visa QIWI Wallet</span>
                    </div>
                </div>
                {cashBtn}
            </section>
        </div>
    )
}
