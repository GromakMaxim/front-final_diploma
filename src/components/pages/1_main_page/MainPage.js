import React, {useState} from "react";
import DefaultWidget from "./sections/search_offers/DefaultWidget";
import ApiClient from "../../../service/ApiClient";
import UserPaymentData from "../5_payment_page/dataObject/UserPaymentData";

import './css/mainPage.css';
import MiddleSection from "./sections/MiddleSection";
import TopSection from "./sections/TopSection";
import LowSection from "./sections/LowSection";

export default function MainPage(props) {
    const [state, setState] = useState(
        {
            display: '',
            routes: '',
            filter: '',
        }
    )


    const [display, setDisplay] = useState(); // отображаемая в данный момент middle секция
    const [filter, setFilter] = useState(); // фильтры
    const [routes, setRoutes] = useState(null); // направления

    const [seatsData, setSeatsData] = useState();
    const [selectedTrain, setSelectedTrain] = useState();
    const [selectedWagon, setSelectedWagon] = useState();
    const [selectedSeatsData, setSelectedSeats] = useState(new Set());
    const [selectedPassengersData, setPassengers] = useState(new Set());
    const [paymentData, setPaymentData] = useState(new UserPaymentData());


    let classes = null;

    function openSeats() {
        setDisplay('seats');
    }

    function openOffers() {
        setDisplay('offers');
    }

    function openPassengers() {
        setDisplay('passengers');
    }

    function openPayment() {
        if (selectedPassengersData.size !== 0 && selectedSeatsData.size !== 0) {
            if (selectedPassengersData.size === selectedSeatsData.size) {
                setDisplay('payment');
            }
        }
    }

    function openConfirm() {
        setDisplay('confirm');
    }

    function openThnx() {
        classes = 'main-page bgr3';
        setDisplay('thnx');
    }

    function selectAnyWagon(index) {
        setSelectedWagon(seatsData[index - 1]);
        console.log('wagon: ' + seatsData);
    }

    function selectSeats(arr) {
        setSelectedSeats(arr);
        console.log('seats:');
        console.log(selectedSeatsData)
    }

    //
    // async function searchSeats(id) {
    //     let found = offersData.items.filter(offer => offer.departure._id === id)[0];
    //     setSelectedTrain(found);
    //
    //     let result = await apiClient.getSeats(id);
    //     console.log(result)
    //     await setSeatsData(result);
    //     await setSelectedWagon(result[0]);
    //
    // }


    if (display === 'default') {
        classes = 'main-page bgr2';
    } else {
        classes = 'main-page bgr1';
    }

    return (
        <div className={classes}>
            <TopSection setState={setState} state={state}/>
            <MiddleSection setState={setState} state={state}/>
            <LowSection setState={setState} state={state}/>
        </div>
    );
}
