import SearchRoutesButton from "./SearchRoutesButton";

import './css/style.css';

import bgr1 from './img/train_header.png';
import bgr2 from './img/train_header2.png';

import Logo from "../../pages/1_main_page/sections/logo/Logo";
import NavigationMenu from "../../pages/1_main_page/sections/navigation_menu/NavigationMenu";
import StorageService from "../../../service/StorageService";
import {useState} from "react";

export default function RoutesSearchWidget(props) {
    let storageHandler = new StorageService();

    const [fromCity, setFromCity] = useState(storageHandler.get('fromCity'));
    const [toCity, setToCity] = useState(storageHandler.get('toCity'));
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    let motto = null;
    let bgrStyle = {
        backgroundImage: `url(${bgr1})`,
        minHeight: '90vh',
        borderBottom: '8px solid #FFA800',
    }

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

    let routesSearch = 'routes_search';
    let routesSearchWrap = 'routes_search_wrap';
    let directionAndDate = 'direction_and_date';
    switch (props.type) {
        case 'default':
            motto = <div className='motto'>
                <span>Вся жизнь - </span>
                <span> путешествие!</span>
            </div>;
            break;
        case 'horizontal':
            motto = null;
            bgrStyle = {
                backgroundImage: `url(${bgr2})`,
                borderBottom: 'none',
            };
            routesSearchWrap = routesSearchWrap + ' hor';
            routesSearch = routesSearch + ' hor';
            directionAndDate = directionAndDate + ' hor';
            break;
    }


    return (
        <section className='routes_search' style={bgrStyle}>
            <Logo/>
            <NavigationMenu/>
            <div className={routesSearchWrap}>
                {motto}
                <div className={routesSearch}>
                    <div className={directionAndDate}>
                        <div className='direction'>
                            <h3>Направление</h3>
                            <div className='controls'>
                                <input className='from' type='text' placeholder='Откуда' onChange={onInputFromCity}
                                       defaultValue={storageHandler.get('fromCity')}/>
                                <div className='pic-refresh'/>
                                <input className='to' type='text' placeholder='Куда' onChange={onInputToCity}
                                       defaultValue={storageHandler.get('toCity')}/>
                            </div>
                        </div>
                        <div className='date'>
                            <h3>Дата</h3>
                            <div className='controls'>
                                <input className='from' type='date' placeholder='ДД/ММ/ГГ' onChange={onInputStartDate}
                                       defaultValue={storageHandler.get('startDate')}/>
                                <input className='to' type='date' placeholder='ДД/ММ/ГГ' onChange={onInputEndDate}
                                       defaultValue={storageHandler.get('endDate')}/>
                            </div>
                        </div>
                    </div>
                    <div className='action_btn hor'>
                        <SearchRoutesButton fromCity={fromCity}
                                            toCity={toCity}
                                            startDate={startDate}
                                            endDate={endDate}
                                            state={props.state}
                                            setState={props.setState}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
