import React from "react";
import FIOField from "./FIOField";

export default function PassengerFIOSection(props) {
    return (
        <div className="passenger-form-section passenger-name-section">
            <FIOField htmlFor='last_name'
                      label='Фамилия'
                      id='last_name'
                      name='last_name'
                      pattern='[a-zA-Zёа-яЁА-Я]+'
                      func={props.funcSurname}/>

            <FIOField htmlFor='first_name'
                      label='Имя'
                      id='first_name'
                      name='first_name'
                      pattern='[a-zA-Zёа-яЁА-Я]+'
                      func={props.funcName}/>

            <FIOField htmlFor='patronymic'
                      label='Отчество'
                      id='patronymic'
                      name='patronymic'
                      pattern='[a-zA-Zёа-яЁА-Я]+'
                      func={props.funcPatronymic}/>
        </div>
    )
}
