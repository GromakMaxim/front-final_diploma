import React, {useState} from "react";

import './css/style.css';
import ApiClient from "../../../../../service/ApiClient";
import cloneFunc from "../../../../../service/CloneFunc";
import StorageService from "../../../../../service/StorageService";

export default function DefaultWidget(props) {

    let storageHandler = new StorageService();

    const [fromCity, setFromCity] = useState(storageHandler.get('fromCity'));

    const [toCity, setToCity] = useState(storageHandler.get('toCity'));

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
            endDate: endDate,
            limit: '5', // отображать по 5 направлений
            offset: '0', // смещение
            pagination: '1' // страница пагинации
        }

        storageHandler.put('fromCity', fromCity);
        storageHandler.put('toCity', toCity);

        let routes = await apiClient.getRoutes(findThis);

        temp = props.state;
        temp.display = 'routes';
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
                    <input className='from' type='text' placeholder='Откуда' onChange={onInputFromCity}
                           defaultValue={storageHandler.get('fromCity')}/>
                    <div className='pic-refresh'/>
                    <input className='to' type='text' placeholder='Куда' onChange={onInputToCity}
                           defaultValue={storageHandler.get('toCity')}/>
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
