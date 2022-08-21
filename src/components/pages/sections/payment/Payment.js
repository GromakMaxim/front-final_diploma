import React from "react";
import PaymentFIOSection from "./PaymentFIOSection";

export default function Payment(props) {
    return (
        <section className="order-page-passengers-info order-page-payment-page false">
            <div className="payment-form-wrapper">
                <form className="payment-form">
                    <div className="payment-user-section">
                        <div className="payment-form-title">Персональные данные</div>
                        <PaymentFIOSection/>
                        <div className="payment-contact-section">
                            <div className="payment-section payment-phone">
                                <label htmlFor="phone">Контактный
                                    телефон</label>
                                <input id="phone" name="phone" type="phone" required=""
                                       pattern="^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$"
                                       placeholder="+7_ _ _ _ _ _ _ _ _ _"/>
                            </div>
                            <div className="payment-section payment-email">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    id="email" name="email" type="email" required=""
                                    pattern="^(([^<>()[\]\\.,;:\s@&quot;]+(\.[^<>()[\]\\.,;:\s@&quot;]+)*)|(&quot;.+&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$"
                                    placeholder="inbox@gmail.ru"/>
                            </div>
                        </div>
                    </div>
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
                </form>
                <div className="payment-form-btn">
                    <button type="button" onClick={props.goTo}>Купить билеты</button>
                </div>
            </div>
        </section>
    );
}
