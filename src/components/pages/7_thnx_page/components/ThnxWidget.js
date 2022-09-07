import React from "react";
import Logo from "../../1_main_page/sections/logo/Logo";
import NavigationMenu from "../../1_main_page/sections/navigation_menu/NavigationMenu";

import bgr3 from '../img/thnx.png';

export default function ThnxWidget(props) {

    let bgrStyle = {
        backgroundImage: `url(${bgr3})`
    }
    return (
        <>
            <div className="header-main" style={bgrStyle}>
                <Logo/>
                <NavigationMenu/>
                <h1 className="header-title">Благодарим Вас за заказ!</h1>
            </div>
        </>

    )
}
