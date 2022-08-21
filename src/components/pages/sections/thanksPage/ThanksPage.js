import React from "react";
import Steps from "./Steps";

export default function ThanksPage(props) {
    return (
        <div className="successful-order-page">
            <section className="successful-order-page_header">
                <span>№Заказа 285АА</span>
                <div className="ticket-price">
                    <span>сумма</span>
                    <div className="summary-value">1028</div>
                    <div className="value-image">
                        <img src="/images/icon-value.png" alt="icon value"/>
                    </div>
                </div>
            </section>
            <Steps />
            <section className="successful-order-page_text">
                <span className="appeal">{props.paymentData.surname} {props.paymentData.name}!</span>
                <span>Ваш заказ успешно оформлен.</span>
                <span>В ближайшее время с вами свяжется наш оператор для подтверждения.</span>
                <span>Благодарим Вас за оказанное доверие и желаем приятного путешествия!</span>
            </section>
            <section className="successful-order-page_rating">
                <div className="rating-wrapper">
                    <span>Оценить сервис</span>
                    <div className="rating-star-list">
                        <div className="rating-star-item false" aria-hidden="true"/>
                        <div className="rating-star-item false" aria-hidden="true"/>
                        <div className="rating-star-item false" aria-hidden="true"/>
                        <div className="rating-star-item false" aria-hidden="true"/>
                        <div className="rating-star-item false" aria-hidden="true"/>
                    </div>
                </div>
                <div>
                    <button type="button" className="redirect-mainPage-btn">Вернуться на главную</button>
                </div>
            </section>
        </div>
    );
}
