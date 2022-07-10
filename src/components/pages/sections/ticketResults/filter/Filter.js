import React from "react";
import Trigger from "./Trigger";

export default function Filter(props) {
    return (
        <div className='filter'>
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
                                           className="" value=""/>
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
                                           className="" value=""/>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>

            <div className='triggers'>
                <Trigger name='купе' pic='/images/icon-second-class.png'/>
                <Trigger name='плацкарт' pic='/images/icon-third-class.png'/>
                <Trigger name='сидячий' pic='/images/icon-fourth-class.png'/>
                <Trigger name='люкс' pic='/images/icon-first-class.png'/>
                <Trigger name='Wi-Fi' pic='/images/icon-wifi.png'/>
                <Trigger name='экспресс' pic='/images/icon-express.png'/>
            </div>
        </div>
    )

}
