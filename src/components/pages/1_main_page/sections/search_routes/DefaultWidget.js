import React, {useState} from "react";

import './css/style.css';
import StorageService from "../../../../../service/StorageService";
import RoutesSearchWidget from "../../../../commons/routesSearch/RoutesSearchWidget";

export default function DefaultWidget(props) {

    let storageHandler = new StorageService();

    const [fromCity, setFromCity] = useState(storageHandler.get('fromCity'));

    const [toCity, setToCity] = useState(storageHandler.get('toCity'));

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


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
        <RoutesSearchWidget type='default'/>
    )

}
