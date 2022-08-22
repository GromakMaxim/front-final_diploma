import React from "react";

import './css/horizontalWidget.css';

export default function HorizontalWidget(props) {
    return (
        <div className="form-search">
            <form className="form-search-ticket" method="get">
                <div className="form-wrapper">
                    <fieldset className="form-way-section">
                        <legend>Направление</legend>
                        <div className="form-way">
                            <div className="form-way-from">
                                <input name="fromCity" type="text" placeholder="Откуда" autoComplete="off" required=""
                                       defaultValue=""/>
                            </div>
                            <div className="change-input"/>
                            <div className="form-way-to">
                                <input name="toCity" type="text" placeholder="Куда" autoComplete="off" required=""
                                       defaultValue=""/>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="form-date-section">
                        <legend>Дата</legend>
                        <div className="form-input_date">
                            <div className="react-datepicker-wrapper">
                                <div className="react-datepicker__input-container">
                                    <input type="text" name="startDate" placeholder="ДД/ММ/ГГ" autoComplete="off"
                                           defaultValue=""/>
                                </div>
                            </div>
                            <div className="empty-wrapper"/>
                            <div className="react-datepicker-wrapper">
                                <div className="react-datepicker__input-container">
                                    <input type="text" name="endDate" placeholder="ДД/ММ/ГГ" autoComplete="off"
                                           defaultValue=""/>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <button type="submit" className="form-search-btn">Найти билет</button>
            </form>
        </div>
    );

}
