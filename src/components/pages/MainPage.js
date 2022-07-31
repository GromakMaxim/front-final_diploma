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
import SeatSelection from "./sections/seatSelection/SeatSelection";
import AddPassangerWidget from "./sections/passengers/AddPassangerWidget";
import Payment from "./sections/payment/Payment";
import Confirm from "./sections/confirmation/Confirm";
import ThanksPage from "./sections/thanksPage/ThanksPage";
import ThnxWidget from "./sections/findTickets/progress/ThnxWidget";
import ApiClient from "../../service/ApiClient";

export default function MainPage(props) {

    const [offersData, setOffersData] = useState();
    const [seatsData, setSeatsData] = useState();

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
        setDisplay('payment');
    }

    function openConfirm() {
        setDisplay('confirm');
    }

    function openThnx() {
        classes = 'main-page bgr3';
        setDisplay('thnx');
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
        console.log(results)
        setOffersData(results)

        setDisplay('offers');
    }

    async function searchSeats(id){
        let result = await apiClient.getSeats(id);
        console.log(result)
        setSeatsData(result);
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
                    <SeatSelection data={seatsData} searchSeats={searchSeats} goTo={openPassengers}/>
                </div>
            </>
            break;

        case 'passengers':
            displayThis = <>
                <HorizontalWidget/>
                <div className='ticket-results'>
                    <FilterWrapper/>
                    <AddPassangerWidget goTo={openPayment}/>
                </div>
            </>
            break;

        case 'payment':
            displayThis = <>
                <HorizontalWidget/>
                <div className='ticket-results'>
                    <FilterWrapper/>
                    <Payment goTo={openConfirm}/>
                </div>
            </>
            break;

        case 'confirm':
            displayThis = <>
                <HorizontalWidget/>
                <div className='ticket-results'>
                    <FilterWrapper/>
                    <Confirm goTo={openThnx}/>
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
