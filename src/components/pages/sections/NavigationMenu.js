import React from "react";

export default function NavigationMenu(props){
    return(
        <section className='main-menu'>

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
        </section>
    );
}
