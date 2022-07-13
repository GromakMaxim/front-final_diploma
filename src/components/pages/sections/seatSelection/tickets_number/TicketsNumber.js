import React from "react";

export default function TicketsNumber(props) {
    return (
        <section className="seat-selection-ticket-count">
            <h3>Количество билетов</h3>
            <div className="ticket-count-form">
                <div className="count-form">
                    <span className="input-block">Взрослых -
                        <input name="adult" type="number" className="input-value" value="5"/>
                    </span>
                    <span className="input-description">Можно добавить еще 3 пассажиров</span>
                </div>
                <div className="count-form zero">
                    <span className="input-block">Детских -
                        <input name="children" type="number" className="input-value" value="0"/>
                    </span>
                </div>
                <div className="count-form zero">
                    <span className="input-block">Детских «без места» -
                        <input name="childrenWithoutSeat" type="number" className="input-value" value="0"/>
                    </span>
                </div>
            </div>
        </section>
    );

}
