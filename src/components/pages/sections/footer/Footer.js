import React from "react";
import ContactUsItem from "./ContactUsItem";
import phone_img from '../footer/img/phone.png';
import email_img from '../footer/img/email.png';
import skype_img from '../footer/img/skype.png';
import address_img from '../footer/img/search.png';

export default function Footer(props) {
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

                <section className="subscribe"><h3>Подписка</h3>
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
                            <li className="social-item"><a href="https://www.youtube.com/"
                                                           className="social-link social-link-youtube"
                                                           aria-label="youtube" aria-hidden="true">youtube</a></li>
                            <li className="social-item"><a href="https://ru.linkedin.com"
                                                           className="social-link social-link-in" aria-label="linkedin"
                                                           aria-hidden="true">linkedin</a></li>
                            <li className="social-item"><a href="https://www.google.com/"
                                                           className="social-link social-link-google"
                                                           aria-label="google" aria-hidden="true">google</a></li>
                            <li className="social-item"><a href="https://www.facebook.com/"
                                                           className="social-link social-link-facebook"
                                                           aria-label="facebook" aria-hidden="true">facebook</a></li>
                            <li className="social-item"><a href="https://twitter.com/"
                                                           className="social-link social-link-twitter"
                                                           aria-label="twitter" aria-hidden="true">twitter</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        </footer>
);
}
