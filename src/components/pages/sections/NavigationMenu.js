import React from "react";
import {Link} from "react-router-dom";
import {Route, Routes} from "react-router";
import MainPage from "../MainPage";

export default function NavigationMenu(props){
    return(
        <div className='main-menu'>

            <ul className='main-menu-list'>
                <li>
                    <a href='#info'>О нас</a>
                </li>
                <li>
                    <a href='#features'>Как это работает</a>
                </li>
                <li>
                    <a href='#feedback'>Отзывы</a>
                </li>
                <li>
                    <a href='#contacts'>Контакты</a>
                </li>
            </ul>
        </div>
    );
}
