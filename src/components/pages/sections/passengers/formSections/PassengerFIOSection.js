import React from "react";

export default function PassengerFIOSection(props){
    return(
        <div className="passenger-form-section passenger-name-section">
            <div>
                <label htmlFor="last_name">Фамилия</label>
                <input id="last_name" name="last_name"
                       type="text" required=""
                       pattern="[a-zA-Zёа-яЁА-Я]+" defaultValue='' onChange={props.funcName}/>
            </div>
            <div>
                <label htmlFor="first_name">Имя</label>
                <input id="first_name" name="first_name" type="text"
                       required="" pattern="[a-zA-Zёа-яЁА-Я]+"
                       defaultValue=''
                       onChange={props.funcSurname}/>
            </div>
            <div>
                <label htmlFor="patronymic">Отчество</label>
                <input id="patronymic" name="patronymic"
                       type="text" required=""
                       pattern="[a-zA-Zёа-яЁА-Я]+" defaultValue='' onChange={props.funcPatronymic}/>
            </div>
        </div>
    )
}
