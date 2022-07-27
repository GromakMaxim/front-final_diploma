import React, {useState} from "react";
import ApiClient from "../../../../../service/ApiClient";
import DateHandler from "../../../../../service/DateHandler";

export default function DefaultWidget(props) {
    const [fromCity, setFromCity] = useState('');
    const [fromCityId, setFromCityId] = useState();

    const [toCity, setToCity] = useState('');
    const [toCityId, setToCityId] = useState();

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    let apiClient = new ApiClient();
    let dateHandler = new DateHandler();

    async function search(event) {
        event.preventDefault();

        let fromId = await apiClient.getCities(fromCity);
        let toId = await apiClient.getCities(toCity);

        let fromDate = await dateHandler.dateParser(startDate);
        let toDate = await dateHandler.dateParser(endDate);


        const stateForSubmit = {
            from_city_id: fromId,
            to_city_id: toId,
            date_start: fromDate,
            date_end: toDate,
        }
        console.log(stateForSubmit);

        apiClient.getRoutes(stateForSubmit)
            .then(res => props.addRoutes(res))
            .catch(error => console.log(error));


        this.setState({
            // fromCity: {name: '', id: ''},
            // toCity: {name: '', id: ''},
            startDate: '',
            endDate: '',
            isOpen: false,
            list: [],
            focusInput: ''
        })
    }

    function onInputFromCity(e) {
        setFromCity(e.target.value);
    }

    function onInputToCity(e) {
        setToCity(e.target.value);
    }

    function onInputStartDate(e){
        setStartDate(e.target.value);
    }

    function onInputEndDate(e){
        setEndDate(e.target.value);
    }

    return (
        <section className='widget-search-wrapper'>
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
                <button className="form-search-btn" onClick={search}>Найти билет</button>
            </div>
        </section>
    );

}
