import NavigationMenu from "./sections/NavigationMenu";
import React from "react";
import HowItWorks from "./sections/HowItWorks";
import Logo from "./sections/Logo";
import ChooseYourPathWidget from "./sections/ChooseYourPathWidget";

export default function MainPage(props) {
    return (
        <div className='main-page'>
            <Logo/>
            <NavigationMenu/>
            <ChooseYourPathWidget/>
            <HowItWorks/>
        </div>
    );
}
