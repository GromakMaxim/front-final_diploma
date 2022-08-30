import NavigationMenu from "./sections/navigation_menu/NavigationMenu";
import React, {useState} from "react";
import HowItWorks from "./sections/how_it_works/HowItWorks";
import Logo from "./sections/logo/Logo";
import AboutUs from "./sections/about_us/AboutUs";
import FeedbackWidget from "./sections/feedback/FeedbackWidget";
import Footer from "./sections/footer/Footer";
import DefaultWidget from "./sections/search_offers/DefaultWidget";
import HorizontalWidget from "../../commons/horizontalSearch/HorizontalWidget";
import OffersSection from "../2_offers_page/OffersSection";
import SeatSelectionPage from "../3_seats_selection_page/SeatSelectionPage";
import AddPassangerWidget from "../4_passengers_page/AddPassangerWidget";
import Payment from "../5_payment_page/Payment";
import Confirm from "../6_confirm_page/Confirm";
import ThanksPage from "../7_thnx_page/ThanksPage";
import ThnxWidget from "../7_thnx_page/components/ThnxWidget";
import ApiClient from "../../../service/ApiClient";
import UserPaymentData from "../5_payment_page/dataObject/UserPaymentData";
import Progressbar from "../../commons/progressbar/Progressbar";

import './css/mainPage.css';
import MiddleSection from "../2_offers_page/sections/wrapper/MiddleSection";

export default function MainPage(props) {

    const [filterData, setFilterData] = useState();

    const [offersData, setOffersData] = useState();
    const [seatsData, setSeatsData] = useState();
    const [selectedTrain, setSelectedTrain] = useState();
    const [selectedWagon, setSelectedWagon] = useState();
    const [selectedSeatsData, setSelectedSeats] = useState(new Set());
    const [selectedPassengersData, setPassengers] = useState(new Set());
    const [paymentData, setPaymentData] = useState(new UserPaymentData());

    const [display, setDisplay] = useState();


    let classes = null;
    let displayThis = <DefaultWidget setFilter={setFilterData}
                                     searchOffers={searchOffers}
                                     goTo={openOffers}/>

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


    async function searchOffers(findThisObj) {
        if (findThisObj === null || findThisObj === undefined) {
            findThisObj = filterData;
        }

        let fromId = await apiClient.getCityId(findThisObj.fromCity);
        let toId = await apiClient.getCityId(findThisObj.toCity);

        const stateForSubmit = {
            from_city_id: fromId,
            to_city_id: toId,
            date_start: findThisObj.startDate ? findThisObj.startDate : '',
            date_end: findThisObj.endDate ? findThisObj.endDate : '',
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
                <Progressbar stage='1'/>
                <MiddleSection>
                    <OffersSection
                        setOffersData={setOffersData}
                        offersData={offersData}
                        search={searchSeats}
                        goTo={openSeats}/>
                </MiddleSection>
            </>
            return (
                <div className={classes}>
                    <Logo/>
                    <NavigationMenu/>
                    {displayThis}
                    <Footer/>
                </div>
            );

        case 'seats':
            displayThis = <>
                <HorizontalWidget/>
                <Progressbar stage='1'/>
                <MiddleSection>
                    <SeatSelectionPage data={seatsData} train={selectedTrain}
                                       searchSeats={searchSeats}
                                       goTo={openPassengers}
                                       selectWagon={selectAnyWagon}
                                       selected={selectedWagon}
                                       getBack={openOffers}
                                       selectSeatsFunc={selectSeats}
                                       selectedSeatsData={selectedSeatsData}/>
                </MiddleSection>
            </>
            return (
                <div className={classes}>
                    <Logo/>
                    <NavigationMenu/>
                    {displayThis}
                    <Footer/>
                </div>
            );

        case 'passengers':
            displayThis = <>
                <HorizontalWidget/>
                <Progressbar stage='2'/>
                <MiddleSection>
                    <AddPassangerWidget
                        selectedSeatsData={selectedSeatsData}
                        selectPassengersFunc={setPassengers}
                        selectedPassengersData={selectedPassengersData}
                        goTo={openPayment}/>
                </MiddleSection>
            </>
            return (
                <div className={classes}>
                    <Logo/>
                    <NavigationMenu/>
                    {displayThis}
                    <Footer/>
                </div>
            );

        case 'payment':
            displayThis = <>
                <HorizontalWidget/>
                <Progressbar stage='3'/>
                <MiddleSection>
                    <Payment paymentData={paymentData}
                             setPaymentData={setPaymentData}
                             goTo={openConfirm}/>
                </MiddleSection>
            </>
            return (
                <div className={classes}>
                    <Logo/>
                    <NavigationMenu/>
                    {displayThis}
                    <Footer/>
                </div>
            );

        case 'confirm':
            displayThis = <>
                <HorizontalWidget/>
                <Progressbar stage='4'/>
                <MiddleSection>
                    <Confirm
                        paymentData={paymentData}
                        selectedPassengersData={selectedPassengersData}
                        goTo={openThnx}/>
                </MiddleSection>
            </>
            return (
                <div className={classes}>
                    <Logo/>
                    <NavigationMenu/>
                    {displayThis}
                    <Footer/>
                </div>
            );

        case 'thnx':
            displayThis = <>
                <ThnxWidget/>
                <div className='thnx'>
                    <ThanksPage
                        paymentData={paymentData}/>
                </div>
            </>
            return (
                <div className={classes}>
                    <Logo/>
                    <NavigationMenu/>
                    {displayThis}
                    <Footer/>
                </div>
            )
            break;
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
