import NavigationMenu from "./sections/NavigationMenu";
import React, {useState} from "react";
import HowItWorks from "./sections/HowItWorks";
import Logo from "./sections/Logo";
import AboutUs from "./sections/aboutUs/AboutUs";
import FeedbackWidget from "./sections/feedback/FeedbackWidget";
import Footer from "./sections/footer/Footer";
import DefaultWidget from "./sections/findTickets/progress/DefaultWidget";
import HorizontalWidget from "./sections/findTickets/progress/HorizontalWidget";
import FilterWrapper from "./sections/ticketResults/filter/FilterWrapper";
import Offers from "./sections/ticketResults/Offers";
import SeatSelection from "./sections/seatSelection/wagon/seats/SeatSelection";
import AddPassangerWidget from "./sections/passengers/AddPassangerWidget";
import Payment from "./sections/payment/Payment";
import Confirm from "./sections/confirmation/Confirm";
import ThanksPage from "./sections/thanksPage/ThanksPage";
import ThnxWidget from "./sections/findTickets/progress/ThnxWidget";
import ApiClient from "../../service/ApiClient";
import UserPaymentData from "./sections/payment/dataObject/UserPaymentData";

export default function MainPage(props) {

    const [offersData, setOffersData] = useState();
    const [seatsData, setSeatsData] = useState();
    const [selectedTrain, setSelectedTrain] = useState();
    const [selectedWagon, setSelectedWagon] = useState();
    const [selectedSeatsData, setSelectedSeats] = useState(new Set());
    const [selectedPassengersData, setPassengers] = useState(new Set());
    const [paymentData, setPaymentData] = useState(new UserPaymentData());

    const [display, setDisplay] = useState();


    let classes = null;
    let displayThis = <DefaultWidget searchTickets={searchOffers} goTo={openOffers}/>

    let apiClient = new ApiClient();

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


    async function searchOffers(fromCity, toCity, startDate, endDate) {

        let fromId = await apiClient.getCityId(fromCity);
        let toId = await apiClient.getCityId(toCity);

        const stateForSubmit = {
            from_city_id: fromId,
            to_city_id: toId,
            date_start: startDate ? startDate : '',
            date_end: endDate ? endDate : '',
        }

        let results = await apiClient.getRoutes(stateForSubmit);
        console.log('offers');
        console.log(results);
        setOffersData(results);

        setDisplay('offers');
    }

    async function searchSeats(id) {
        let found = offersData.items.filter(offer => offer.departure._id === id)[0];
        setSelectedTrain(found);

        let result = await apiClient.getSeats(id);
        console.log(result)
        await setSeatsData(result);
        await setSelectedWagon(result[0]);

    }


    if (display === 'default') {
        classes = 'main-page bgr2';
    } else {
        classes = 'main-page bgr1';
    }

    switch (display) {
        case 'offers':
            displayThis = <>
                <HorizontalWidget/>
                <div className='ticket-results'>
                    <FilterWrapper/>
                    <Offers data={offersData} search={searchSeats} goTo={openSeats}/>
                </div>
            </>
            break;

        case 'seats':
            displayThis = <>
                <HorizontalWidget/>
                <div className='ticket-results'>
                    <FilterWrapper/>
                    <SeatSelection data={seatsData} train={selectedTrain}
                                   searchSeats={searchSeats}
                                   goTo={openPassengers}
                                   selectWagon={selectAnyWagon}
                                   selected={selectedWagon}
                                   getBack={openOffers}
                                   selectSeatsFunc={selectSeats}
                                   selectedSeatsData={selectedSeatsData}
                    />
                </div>
            </>
            break;

        case 'passengers':
            displayThis = <>
                <HorizontalWidget/>
                <div className='ticket-results'>
                    <FilterWrapper/>
                    <AddPassangerWidget
                        selectedSeatsData={selectedSeatsData}
                        selectPassengersFunc={setPassengers}
                        selectedPassengersData={selectedPassengersData}
                        goTo={openPayment}/>
                </div>
            </>
            break;

        case 'payment':
            displayThis = <>
                <HorizontalWidget/>
                <div className='ticket-results'>
                    <FilterWrapper/>
                    <Payment paymentData={paymentData}
                             setPaymentData={setPaymentData}
                             goTo={openConfirm}/>
                </div>
            </>
            break;

        case 'confirm':
            displayThis = <>
                <HorizontalWidget/>
                <div className='ticket-results'>
                    <FilterWrapper/>
                    <Confirm
                        paymentData={paymentData}
                        selectedPassengersData={selectedPassengersData}
                        goTo={openThnx}/>
                </div>
            </>
            break;

        case 'thnx':
            displayThis = <>
                <ThnxWidget/>
                <div className='thnx'>
                    <ThanksPage/>
                </div>
            </>
    }


    return (
        <div className={classes}>
            <Logo/>
            <NavigationMenu/>
            {displayThis}
            <AboutUs/>
            <HowItWorks/>
            <FeedbackWidget/>
            <Footer/>
        </div>
    );

}
