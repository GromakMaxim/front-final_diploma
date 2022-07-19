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

export default function MainPage(props) {

    const [defaultIsDisplayed, showDefault] = useState(true);
    const [offersIsDisplayed, showOffers] = useState(false);
    const [seatsIsDisplayed, showSeats] = useState(false);
    const [passengersIsDisplayed, showPsngrs] = useState(false);
    const [paymentIsDisplayed, showPayment] = useState(false);


    let classes = null;


    function openOffers() {
        console.log('offers opened')
        showDefault(false);
        showOffers(!offersIsDisplayed);
        showSeats(false);
        showPsngrs(false);
        showPayment(false);
    }

    function openSeats() {
        console.log('seats opened');
        showDefault(false);
        showOffers(false);
        showSeats(!seatsIsDisplayed);
        showPsngrs(false);
        showPayment(false);
    }

    function openPassengers() {
        console.log('psngrs opened');
        showDefault(false);
        showOffers(false);
        showSeats(false);
        showPsngrs(!passengersIsDisplayed);
        showPayment(false);
    }

    function openPayment(){
        console.log('payment opened');
        showDefault(false);
        showOffers(false);
        showSeats(false);
        showPsngrs(false);
        showPayment(!paymentIsDisplayed);

    }

    if (!defaultIsDisplayed) {
        classes = 'main-page bgr2'
    } else {
        classes = 'main-page bgr1';
    }

    if (offersIsDisplayed) {
        return (
            <div className={classes}>
                <Logo/>
                <NavigationMenu/>
                <HorizontalWidget/>
                <div className='ticket-results'>
                    <FilterWrapper/>
                    <Offers goTo={openSeats}/>
                </div>
                <Footer/>
            </div>
        );
    }

    if (seatsIsDisplayed) {
        return (
            <div className={classes}>
                <Logo/>
                <NavigationMenu/>
                <HorizontalWidget/>
                <div className='ticket-results'>
                    <FilterWrapper/>
                    <SeatSelection goTo={openPassengers}/>
                </div>
                <Footer/>
            </div>
        )
    }

    if (passengersIsDisplayed){
        return (
            <div className={classes}>
                <Logo/>
                <NavigationMenu/>
                <HorizontalWidget/>
                <div className='ticket-results'>
                    <FilterWrapper/>
                    <AddPassangerWidget goTo={openPayment}/>
                </div>
                <Footer/>
            </div>
        )
    }

    if (paymentIsDisplayed){
        return (
            <div className={classes}>
                <Logo/>
                <NavigationMenu/>
                <HorizontalWidget/>
                <div className='ticket-results'>
                    <FilterWrapper/>
                    <Payment/>
                </div>
                <Footer/>
            </div>
        )
    }

    return (
        <div className={classes}>
            <Logo/>
            <NavigationMenu/>
            <DefaultWidget goTo={openOffers}/>
            <AboutUs/>
            <HowItWorks/>
            <FeedbackWidget/>
            <Footer/>
        </div>
    );

}
