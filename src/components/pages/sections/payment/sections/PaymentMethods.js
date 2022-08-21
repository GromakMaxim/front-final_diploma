import React from "react";

export default function PaymentMethods(props){
    return (
        <div className="payment-section payment-method">
            <div className="payment-form-title">Способы оплаты</div>
            <section>
                <div className="payment-info_online">
                    <div className="method false">
                        <input type='checkbox'/>
                        <span>Онлайн</span>
                    </div>
                    <div className="online-payment-list">
                        <span>Банковской картой</span>
                        <span>PayPal</span>
                        <span>Visa QIWI Wallet</span>
                    </div>
                </div>
                <div className="method cash active">
                    <input type='checkbox'/>
                    <span>Наличными</span>
                </div>
            </section>
        </div>
    )
}
