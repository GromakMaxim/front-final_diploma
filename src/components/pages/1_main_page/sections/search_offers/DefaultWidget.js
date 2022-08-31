import React, {useState} from "react";

import './css/style.css';
import ApiClient from "../../../../../service/ApiClient";
import cloneFunc from "../../../../../service/CloneFunc";

export default function DefaultWidget(props) {

    const [fromCity, setFromCity] = useState('');

    const [toCity, setToCity] = useState('');

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    let apiClient = new ApiClient();


    function onInputFromCity(e) {
        setFromCity(e.target.value);
    }

    function onInputToCity(e) {
        setToCity(e.target.value);
    }

    function onInputStartDate(e) {
        setStartDate(e.target.value);
    }

    function onInputEndDate(e) {
        setEndDate(e.target.value);
    }

    async function clickHandle() {
        let temp;

        let findThis = {
            fromCity: fromCity,
            toCity: toCity,
            startDate: startDate,
            endDate: endDate
        }

        let routes = await apiClient.getRoutes(findThis);

        temp = props.state;
        temp.display = 'offers';
        temp.routes = routes;
        temp.filter = findThis;

        let newState = await cloneFunc(temp);
        props.setState(newState);

    }

    return <section className='widget-search-wrapper'>
        <div className='motto'>
            <span>Вся жизнь - </span>
            <span> путешествие!</span>
        </div>
        <div className='widget-search-ticket'>
            <div className='direction'>
                <h3>Направление</h3>
                <div>
                    <input className='from' type='text' placeholder='Откуда' onChange={onInputFromCity}/>
                    <div className='pic-refresh'/>
                    <input className='to' type='text' placeholder='Куда' onChange={onInputToCity}/>
                </div>
            </div>
            <div className='date'>
                <h3>Дата</h3>
                <div>
                    <input className='from' type='date' placeholder='ДД/ММ/ГГ' onChange={onInputStartDate}/>
                    <div className='pic-refresh'/>
                    <input className='to' type='date' placeholder='ДД/ММ/ГГ' onChange={onInputEndDate}/>
                </div>
            </div>
            <button className="form-search-btn" onClick={clickHandle}>Найти билет</button>
        </div>
    </section>

}
