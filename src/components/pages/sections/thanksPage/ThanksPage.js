export default function ThanksPage(props){
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
            <section className="successful-order-page_action">
                <div className="action-plan_item">
                    <div className="action-plan_item-image email"/>
                    <span>билеты будут отправлены на ваш
                        <b>e-mail</b>
                    </span>
                </div>
                <div className="action-plan_item">
                    <div className="action-plan_item-image print"/>
                    <span>
                        <b>распечатайте</b>
                        и сохраняйте билеты до даты поездки</span>
                </div>
                <div className="action-plan_item">
                    <div className="action-plan_item-image control"/>
                    <span>
                        <b>предьявите</b>
                        распечатанные билеты при посадке</span>
                </div>
            </section>
            <section className="successful-order-page_text">
                <span className="appeal">керкркр кркркер!</span>
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
