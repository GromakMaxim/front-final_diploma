import NavigationMenu from "./sections/NavigationMenu";
import React, {useState} from "react";
import HowItWorks from "./sections/HowItWorks";
import Logo from "./sections/Logo";
import FindTicketWidget from "./sections/findTickets/FindTicketWidget";
import AboutUs from "./sections/aboutUs/AboutUs";
import FeedbackWidget from "./sections/feedback/FeedbackWidget";
import Footer from "./sections/footer/Footer";
import Progressbar from "./sections/findTickets/progress/Progressbar";

export default function MainPage(props) {

    const[barIsDisplayed, showProgressBar] = useState(false);


    let classes = null;

    function clickHandle(){
        showProgressBar(!barIsDisplayed);
    }

    if (barIsDisplayed){
        classes = 'main-page bgr2'
    } else {
        classes = 'main-page bgr1';
    }

    return (
        <div className={classes}>
            <Logo/>
            <NavigationMenu/>
            <FindTicketWidget func={clickHandle} bar={barIsDisplayed}/>
            <AboutUs/>
            <HowItWorks/>
            <FeedbackWidget/>
            <Footer/>
        </div>
    );

}
