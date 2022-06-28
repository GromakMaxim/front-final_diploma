import React from "react";

export default function Progressbar({isPassangerPage, isPayment, isVerification}) {
    return (
        <div className='progressbar'>
            <div className='stage active'>
                <div className='number'>
                    <span>1</span>
                </div>
                <span className='stage-title'>Билеты</span>

            </div>
            <div className='stage-arrow active'/>
            <div className='stage'>
                <div className='number'>
                    <span>2</span>
                </div>
                <span className='stage-title'>Пассажиры</span>
                <div className='stage-arrow'/>
            </div>
            <div className='stage'>
                <div className='number'>
                    <span>3</span>
                </div>
                <span className='stage-title'>Оплата</span>
                <div className='stage-arrow'/>
            </div>
            <div className='stage'>
                <div className='number'>
                    <span>4</span>
                </div>
                <span className='stage-title'>Проверка</span>
            </div>

        </div>
    )
}
