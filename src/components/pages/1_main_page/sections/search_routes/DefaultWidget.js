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

    async function concat(rawDate){
        let yyyy = rawDate.split('-')[0];
        let mm = rawDate.split('-')[1];
        let dd = rawDate.split('-')[2];

        return yyyy + '-' + mm + '-' + dd;
    }

    async function clickHandle() {
        let temp;

        let begin = startDate;
        let end = endDate;

        if (begin.includes('undef')) begin = '';
        if (end.includes('undef')) end = '';


        let findThis = {
            fromCity: fromCity,
            toCity: toCity,
            startDate: begin,
            endDate: end,
            limit: '5', // отображать по 5 направлений
            offset: '0', // смещение
            pagination: '1' // страница пагинации
        }

        console.log(findThis);

        storageHandler.put('fromCity', fromCity);
        storageHandler.put('toCity', toCity);

        let routes = await apiClient.getRoutes(findThis);
        temp = props.state;
        if (routes.error || routes.total_count === 0){
            temp.error = {
                type: 'err',
                mainText: 'По выбранному направлению билетов нет',
                secondaryText: 'Попробуйте выбрать другое направление.',
            }
        } else {
            temp.display = 'routes';
            temp.routes = routes;
            temp.filter = findThis;
        }

        console.log(temp)
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
