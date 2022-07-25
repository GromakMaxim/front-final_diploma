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

export default function MainPage(props) {

    const [defaultIsDisplayed, showDefault] = useState(true);
    const [offersIsDisplayed, showOffers] = useState(false);
    const [seatsIsDisplayed, showSeats] = useState(false);
    const [passengersIsDisplayed, showPsngrs] = useState(false);
    const [paymentIsDisplayed, showPayment] = useState(false);
    const [confirmIsDisplayed, showConfirmation] = useState(false);
    const [thnxIsDisplayed, showThnx] = useState(false);


    let classes = null;


    function openOffers() {
        console.log('offers opened')
        showDefault(false);
        showOffers(!offersIsDisplayed);
        showSeats(false);
        showPsngrs(false);
        showPayment(false);
        showConfirmation(false);
        showThnx(false);
    }

    function openSeats() {
        console.log('seats opened');
        showDefault(false);
        showOffers(false);
        showSeats(!seatsIsDisplayed);
        showPsngrs(false);
        showPayment(false);
        showConfirmation(false);
        showThnx(false);
    }

    function openPassengers() {
        console.log('psngrs opened');
        showDefault(false);
        showOffers(false);
        showSeats(false);
        showPsngrs(!passengersIsDisplayed);
        showPayment(false);
        showConfirmation(false);
        showThnx(false);
    }

    function openPayment(){
        console.log('payment opened');
        showDefault(false);
        showOffers(false);
        showSeats(false);
        showPsngrs(false);
        showPayment(!paymentIsDisplayed);
        showConfirmation(false);
        showThnx(false);
    }

    function openConfirm(){
        console.log('confirm opened');
        showDefault(false);
        showOffers(false);
        showSeats(false);
        showPsngrs(false);
        showPayment(false);
        showConfirmation(!confirmIsDisplayed);
        showThnx(false);
    }

    function openThnx(){
        console.log('thanks page opened');
        showDefault(false);
        showOffers(false);
        showSeats(false);
        showPsngrs(false);
        showPayment(false);
        showConfirmation(false);
        showThnx(!thnxIsDisplayed);
    }

    if (!defaultIsDisplayed) {
        classes = 'main-page bgr2';
    } else {
        classes = 'main-page bgr1';
    }

    if (thnxIsDisplayed) classes = 'main-page bgr3';

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
                    <Payment goTo={openConfirm}/>
                </div>
                <Footer/>
            </div>
        )
    }

    if (confirmIsDisplayed){
        return (
            <div className={classes}>
                <Logo/>
                <NavigationMenu/>
                <HorizontalWidget/>
                <div className='ticket-results'>
                    <FilterWrapper/>
                    <Confirm goTo={openThnx}/>
                </div>
                <Footer/>
            </div>
        )
    }

    if (thnxIsDisplayed){
        return <div className={classes}>
            <Logo/>
            <NavigationMenu/>
            <ThnxWidget/>
            <div className='thnx'>
                <ThanksPage/>
            </div>
            <Footer/>
        </div>
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
