import React, {useState} from "react";
import UserObject from "./dataObject/UserObject";

export default function Passenger(props) {
    const [detailsIsDisplayed, showDetails] = useState(false);
    const [user, setUserData] = useState(new UserObject());

    function show() {
        showDetails(!detailsIsDisplayed);
    }

    function surnameInputHandle(e) {
        let obj = user;
        obj.lastname = e.target.value;
        setUserData(obj);
        console.log(user);
    }

    function nameInputHandle(e) {
        let obj = user;
        obj.firstname = e.target.value;
        setUserData(obj);
        console.log(user);
    }

    function patronymicInputHandle(e){
        let obj = user;
        obj.patronymic = e.target.value;
        setUserData(obj);
        console.log(user);
    }

    if (!detailsIsDisplayed) {
        return (
            <div className="passenger-item">
                <div className="passenger-item-top">
                    <div>
                        <div className="passenger-item-top_btn passenger-open" aria-hidden="true" onClick={show}/>
                        <div className="passenger-item-top_title">Пассажир {props.number}</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="passenger-item">
            <div className="passenger-item-top open">
                <div>
                    <div className="passenger-item-top_btn passenger-close" aria-hidden="true" onClick={show}/>
                    <div className="passenger-item-top_title">Пассажир {props.number}</div>
                </div>
                <div className="delete-passenger-btn" aria-hidden="true"/>
            </div>
            <div className="passenger-form-wrapper">
                <form className="passenger-form">
                    <div className="passenger-form-section passenger-type-section">
                        <label htmlFor="person_type" className="hidden">Тип
                            пассажира</label>
                        <select id="person_type" name="person_type">
                            <option name="person_type" value="is_adult">Взрослый</option>
                            <option name="person_type" value="is_child">Детский</option>
                        </select>
                    </div>
                    <div className="passenger-form-section passenger-name-section">
                        <div>
                            <label htmlFor="last_name">Фамилия</label>
                            <input id="last_name" name="last_name"
                                   type="text" required=""
                                   pattern="[a-zA-Zёа-яЁА-Я]+" defaultValue='' onChange={surnameInputHandle}/>
                        </div>
                        <div>
                            <label htmlFor="first_name">Имя</label>
                            <input id="first_name" name="first_name" type="text"
                                   required="" pattern="[a-zA-Zёа-яЁА-Я]+"
                                   defaultValue=''
                                   onChange={nameInputHandle}/>
                        </div>
                        <div>
                            <label htmlFor="patronymic">Отчество</label>
                            <input id="patronymic" name="patronymic"
                                   type="text" required=""
                                   pattern="[a-zA-Zёа-яЁА-Я]+" defaultValue='' onChange={patronymicInputHandle}/>
                        </div>
                    </div>
                    <div className="passenger-form-section passenger-gender-section">
                        <div>
                            <span className="gender-lable">Пол</span>
                            <div className="gender-button-wrapper">
                                <button type="button" className="gender-btn gender-btn-left selected">М</button>
                                <button type="button" className="gender-btn gender-btn-right false">Ж</button>
                            </div>
                        </div>
                        <div className="gender-section-datepicker">
                            <label htmlFor="birthday">Дата рождения</label>
                            <input id="birthday" name="birthday" type="date" placeholder="ДД/ММ/ГГ" required=""
                                   defaultValue=''/>
                        </div>
                    </div>
                    <div className="passenger-form-section passenger-invalid-section">
                        <input id="isInvalid" name="isInvalid" type="checkbox"/>
                        <label htmlFor="isInvalid" className="isInvalid">ограниченная подвижность</label>
                    </div>
                    <div className="passenger-form-section passenger-document_type-section">
                        <div>
                            <label htmlFor="document_type">Тип документа</label>
                            <select id="document_type" required="" name="document_type">
                                <option name="document_type" value="паспорт">Паспорт РФ</option>
                                <option name="document_type" value="свидетельство">Свидетельство о рождении</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="document_series">Серия</label>
                            <input id="document_series"
                                   name="document_series" type="text"
                                   placeholder="_ _ _ _" required=""
                                   pattern="[0-9]+" minLength="4"
                                   maxLength="4" defaultValue=''/>
                        </div>
                        <div>
                            <label htmlFor="document_number">Номер</label>
                            <input id="document_number"
                                   name="document_number" type="text"
                                   placeholder="_ _ _ _ _ _" required=""
                                   pattern="[0-9]+" minLength="6"
                                   maxLength="6" defaultValue=''/>
                        </div>
                    </div>
                    <div className="next-passenger-form-btn false">
                        <input type="submit" defaultValue='Следующий пассажир'/>
                    </div>
                </form>
            </div>
        </div>
    );


}
