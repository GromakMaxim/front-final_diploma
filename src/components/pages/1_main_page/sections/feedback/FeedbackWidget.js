import React from "react";
import FeedItem from "./FeedItem";
import avatar1 from './img/user_avatar1.png'
import avatar2 from './img/user_avatar2.png'

import './css/style.css';

export default function FeedbackWidget(props) {
    let array = [
        {
            id: 0,
            name: "Екатерина Вальнова",
            avatar: avatar1,
            descr: "Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, " +
                "даже если вы заказываете онлайн билет впервые."
        },
        {
            id: 1,
            name: "Евгений Стрыкало",
            avatar: avatar2,
            descr: "СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке."
        },
        // {
        //     id: 2,
        //     name: "test-user1",
        //     descr: "test feedback1"
        // },
        // {
        //     id: 3,
        //     name: "test_user2",
        //     descr: "test feedback2"
        // },
        // {
        //     id: 4,
        //     name: "test_user3",
        //     descr: "test feedback3"
        // },
        //
        // {
        //     id: 5,
        //     name: "test_user4",
        //     descr: "test feedback 4"
        // },
        //
        // {
        //     id: 6,
        //     name: "test user5",
        //     descr: "test feedback 5"
        // },
        //
        // {
        //     id: 7,
        //     name: "test user 6",
        //     descr: "feedback 6"
        // },
        //
        // {
        //     id: 8,
        //     name: "test user 7",
        //     descr: "f e e d b a c k 7"
        // },
    ]

    let result = [];

    array.forEach(item => result.push(<FeedItem key={item.id} data={item}/>))
    return (
        <section className='feedback' id='feedback'>
            <div className='feed-container'>
                <h2> отзывы </h2>

                <div className='feed-list'>
                    {result}
                </div>
            </div>
        </section>
    );
}
