import React from "react";

export default function AboutUs(props) {
    return (

        <section className="info-section" id="info">
            <div className="info-container"><h2 className="info-title">О нас</h2>
                <div className="info-main">
                    <div className="info-rectangle"/>
                    <div className="info-text">
                        <p>Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы
                            наблюдаем,
                            как с каждым днем все больше людей заказывают жд билеты через интернет.</p>
                        <p>Сегодня можно
                            заказать
                            железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? Мы расскажем о
                            преимуществах
                            заказа через интернет.</p>
                        <p className="info-text-selection">
                            <span>Покупать жд билеты дешево можно за 90 суток до отправления поезда.</span>
                            <span>Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
