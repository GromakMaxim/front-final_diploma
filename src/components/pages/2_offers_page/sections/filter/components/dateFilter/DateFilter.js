import React from "react";

import './date-filter.css';

export default function DateFilter(props) {
    return (
        <div className="date-filter">
            <form className="date-filter-form">
                <fieldset className="form-date-section from-date">
                    <legend>Дата поездки</legend>
                    <div className="form-input_date">
                        <div className="react-datepicker-wrapper">
                            <div className="react-datepicker__input-container">
                                <input type="text" name="date_start"
                                       placeholder="ДД/ММ/ГГ"
                                       autoComplete="off"
                                       className="" defaultValue=""/>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="form-date-section to-date">
                    <legend>Дата возвращения</legend>
                    <div className="form-input_date">
                        <div className="react-datepicker-wrapper">
                            <div className="react-datepicker__input-container">
                                <input type="text" name="date_end"
                                       placeholder="ДД/ММ/ГГ"
                                       autoComplete="off"
                                       className="" defaultValue=""/>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );

}
