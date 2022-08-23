import FIOField from "../../../../4_passengers_page/components/formSections/FIOField";
import React from "react";

export default function PaymentFIOSection(props){
    return (
        <div className="payment-section payment-user">
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
