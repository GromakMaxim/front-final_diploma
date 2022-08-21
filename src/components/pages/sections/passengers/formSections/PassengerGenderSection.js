import React from "react";

export default function PassengerGenderSection(props) {

    let leftBtnClasses = 'gender-btn gender-btn-left';
    let rightBtnClasses = 'gender-btn gender-btn-right';

    switch (props.selectedGender) {
        case 'm':
            leftBtnClasses = 'gender-btn gender-btn-left selected';
            break;
        case 'f':
            rightBtnClasses = 'gender-btn gender-btn-right selected';
            break;

    }


    return (
        <div className="passenger-form-section passenger-gender-section">
            <div>
                <span className="gender-lable">Пол</span>
                <div className="gender-button-wrapper">
                    <button type="button" className={leftBtnClasses}
                            onClick={props.func} value='m'>М
                    </button>
                    <button type="button" className={rightBtnClasses}
                            onClick={props.func} value='f'>Ж
                    </button>
                </div>
            </div>
            <div className="gender-section-datepicker">
                <label htmlFor="birthday">Дата рождения</label>
                <input id="birthday" name="birthday" type="date" placeholder="ДД/ММ/ГГ" required=""
                       defaultValue='' onChange={props.selectBirthdate}/>
            </div>
        </div>
    );
}
