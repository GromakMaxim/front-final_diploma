import React, {useState} from "react";

import './css/horizontalWidget.css';
import SearchRoutesButton from "../routesSearch/SearchRoutesButton";
import StorageService from "../../../service/StorageService";

export default function HorizontalWidget(props) {

    const [fromCity, setFromCity] = useState(storageHandler.get('fromCity'));
    const [toCity, setToCity] = useState(storageHandler.get('toCity'));
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    let storageHandler = new StorageService();


    function onInputFromCity(e) {
        setFromCity(e.target.value);
    }

    function onInputToCity(e) {
        setToCity(e.target.value);
    }

    async function onInputStartDate(e) {
        let rawInput = e.target.value;
        let preparedDate = await concat(rawInput);
        setStartDate(preparedDate);
    }

    async function onInputEndDate(e) {
        let rawInput = e.target.value;
        let preparedDate = await concat(rawInput);
        setEndDate(preparedDate);
    }

    async function concat(rawDate) {
        let yyyy = rawDate.split('-')[0];
        let mm = rawDate.split('-')[1];
        let dd = rawDate.split('-')[2];

        return yyyy + '-' + mm + '-' + dd;
    }

    return (
        <div className="form-search">
            <form className="form-search-ticket" method="get">
                <div className="form-wrapper">
                    <fieldset className="form-way-section">
                        <legend>Направление</legend>
                        <div className="form-way">
                            <div className="form-way-from">
                                <input name="fromCity" type="text" placeholder="Откуда" autoComplete="off" required=""
                                       defaultValue={props.state.filter.fromCity}/>
                            </div>
                            <div className="change-input"/>
                            <div className="form-way-to">
                                <input name="toCity" type="text" placeholder="Куда" autoComplete="off" required=""
                                       defaultValue={props.state.filter.toCity}/>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="form-date-section">
                        <legend>Дата</legend>
                        <div className="form-input_date">
                            <div className="react-datepicker-wrapper">
                                <div className="react-datepicker__input-container">
                                    <input type="text" name="startDate" placeholder="ДД/ММ/ГГ" autoComplete="off"
                                           defaultValue={props.state.filter.startDate}/>
                                </div>
                            </div>
                            <div className="empty-wrapper"/>
                            <div className="react-datepicker-wrapper">
                                <div className="react-datepicker__input-container">
                                    <input type="text" name="endDate" placeholder="ДД/ММ/ГГ" autoComplete="off"
                                           defaultValue={props.state.filter.endDate}/>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <SearchRoutesButton startDate={startDate}
                                    endDate={endDate}
                                    fromCity={fromCity}
                                    toCity={toCity}
                                    state={props.state}
                                    setState={props.setState}/>
            </form>
        </div>
    );

}
