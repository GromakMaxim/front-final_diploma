import React, {useState} from "react";
import UserObject from "./dataObject/UserObject";
import PassengerGenderSection from "./formSections/PassengerGenderSection";
import PassengerFIOSection from "./formSections/PassengerFIOSection";
import PassengerLimitedMobilitySection from "./formSections/PassengerLimitedMobilitySection";
import PassengerDocumentSection from "./formSections/PassengerDocumentSection";

export default function Passenger(props) {
    const [gender, setGender] = useState();
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

    function patronymicInputHandle(e) {
        let obj = user;
        obj.patronymic = e.target.value;
        setUserData(obj);
        console.log(user);
    }

    function genderInputHandle(e) {
        setGender(e.target.value);
        let obj = user;
        obj.gender = e.target.value;
        setUserData(obj);
        console.log(user);
    }

    function dateInputHandler(e) {
        let obj = user;
        obj.birthdate = e.target.value;
        setUserData(obj);
        console.log(user);
    }

    function setUserMobility(bool){
        let obj = user;
        obj.limitedMobility = bool;
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
                    <PassengerFIOSection funcName={nameInputHandle} funcSurname={surnameInputHandle}
                                         funcPatronymic={patronymicInputHandle}/>

                    <PassengerGenderSection selectBirthdate={dateInputHandler} selectedGender={gender} func={genderInputHandle}/>
                    <PassengerLimitedMobilitySection func={setUserMobility}/>
                    <PassengerDocumentSection/>

                    <div className="next-passenger-form-btn false">
                        <input type="submit" defaultValue='Следующий пассажир'/>
                    </div>
                </form>
            </div>
        </div>
    );


}
