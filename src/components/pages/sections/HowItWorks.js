import React from "react";

export default function HowItWorks(props) {
    return (
        <section className="features-section" id="features">
            <div className="features-container">
                <div className="features-top">
                    <h2 className="features-title">Как это работает</h2>
                    <button type="button" className="features-btn">Узнать больше</button>
                </div>
                <div className="features-list">
                    <div className="features-item features-order">Удобный заказ на сайте</div>
                    <div className="features-item features-office">Нет необходимости ехать в офис</div>
                    <div className="features-item features-world">Огромный выбор направлений</div>
                </div>
            </div>
        </section>
    );
}
