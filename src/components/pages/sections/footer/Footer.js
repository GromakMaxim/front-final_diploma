import React from "react";
import ContactUsItem from "./ContactUsItem";
import phone_img from '../footer/img/phone.png';
import email_img from '../footer/img/email.png';
import skype_img from '../footer/img/skype.png';
import address_img from '../footer/img/search.png';
import SocialItem from "./SocialItem";


export default function Footer(props) {
    let data = [
        {
            id: 0,
            link: 'https://www.youtube.com/',
            label: 'youtube',
        },

        {
            id: 1,
            link: 'https://ru.linkedin.com/',
            label: 'linkedin',
            img: ''
        },

        {
            id: 2,
            link: 'https://www.google.com/',
            label: 'google',
            img: ''
        },

        {
            id: 3,
            link: 'https://www.facebook.com/',
            label: 'facebook',
            img: ''
        },

        {
            id: 4,
            link: 'https://twitter.com/',
            label: 'twitter',
            img: ''
        },


    ];


    let socialsArray = [];

    data.forEach(item=> socialsArray.push(<SocialItem key={item.id} data={item}/>));


    return (
        <footer>
            <div>
                <div className='contact-us'>
                    <span>Свяжитесь с нами</span>

                    <ContactUsItem pic={phone_img} data='8 (800) 000 00 00'/>
                    <ContactUsItem pic={email_img} data='inbox@mail.ru'/>
                    <ContactUsItem pic={skype_img} data='tu.train.tickets'/>
                    <ContactUsItem pic={address_img} data='г. Москва ул. Московская 27-35 555 555'/>

                </div>

                <section className="subscribe">
                    <h3>Подписка</h3>
                    <div className="subscribe-form">
                        <form>
                            <label htmlFor="subscribe-email">Будьте в курсе событий</label>
                            <div className="form-container">
                                <input type="email" id="subscribe-email" placeholder="e-mail" required=""/>
                                <button type="submit" className="subscribe-form-btn">отправить</button>
                            </div>
                        </form>
                    </div>
                    <div className="social-links"><h3>Подписывайтесь на нас</h3>
                        <ul className="social-list">
                            {socialsArray}
                        </ul>
                    </div>
                </section>
            </div>
        </footer>
    );
}
