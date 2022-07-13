import React from "react";

export default function TrainInfo(props) {
    return (
        <div className="seat-selection-ticket-info">
            <div className="train-info">
                <div className="train-icon">
                    <img src="/images/icon-train-small.png" alt="train icon" width="30" height="30"/>
                </div>
                <div className="train-name">
                    <div className="train-number">Калина - 76</div>
                    <div className="train-departure-city">
                        <div className="departure-select-city">
                            <span>Арсеньев</span>
                            <img src="/images/arrow-black.png" alt="arrow"/>
                        </div>
                    </div>
                    <div className="train-arrival-city">Санкт-петербург</div>
                </div>
            </div>
            <div className="departure-info">
                <div className="train-departure">
                    <span className="departure-from-datetime datetime">17:05</span>
                    <span className="departure-from-city">Арсеньев</span>
                    <span className="departure-from-railway_station railway_station">Арсеньев</span>
                </div>
                <div className="departure-arrow">
                    <img src="/images/arrow-gold-right.png" alt="arrow"/>
                </div>
                <div className="train-arrival">
                    <span className="arrival-from-datetime datetime">17:08</span>
                    <span className="arrival-from-city">Санкт-Петербург</span>
                    <span className="arrival-from-railway_station railway_station">Московский</span>
                </div>
            </div>
            <div className="duration-info">
                <div className="duration-icon">
                    <img src="/images/icon-clock.png" alt="icon-clock" width="30" height="30"/>
                </div>
                <div className="duration-formatting">
                    <div>41 часов</div>
                    <div>40 минуты</div>
                </div>
            </div>
        </div>
);
}
