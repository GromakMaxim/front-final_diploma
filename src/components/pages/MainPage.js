import NavigationMenu from "./sections/NavigationMenu";
import React from "react";
import HowItWorks from "./sections/HowItWorks";
import Logo from "./sections/Logo";
import FindTicketWidget from "./sections/findTickets/FindTicketWidget";
import AboutUs from "./sections/AboutUs";
import FeedbackWidget from "./sections/feedback/FeedbackWidget";
import Footer from "./sections/footer/Footer";

export default function MainPage(props) {
    return (
        <div className='main-page'>
            <Logo/>
            <NavigationMenu/>
            <FindTicketWidget/>
            <AboutUs/>
        </div>
    );

    /**
     * <Logo/>
     <NavigationMenu/>
     <FindTicketWidget/>
     <AboutUs/>
     <HowItWorks/>
     <FeedbackWidget/>
     <Footer/>
     */
}
