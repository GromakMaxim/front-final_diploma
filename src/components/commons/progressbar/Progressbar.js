import React from "react";

import './css/progressbar.css';

export default function Progressbar(props) {

    switch (props.stage) {
        case '1':
            return (
                <div className="progressbar">
                    {buildActiveStage(1, 'Билеты')}
                    {buildStage(2, 'Пассажиры')}
                    {buildStage(3, 'Оплата')}
                    {buildStage(4, 'Проверка')}
                </div>
            );

        case '2':
            return (
                <div className="progressbar">
                    {buildActiveStage(1, 'Билеты')}
                    {buildActiveStage(2, 'Пассажиры')}
                    {buildStage(3, 'Оплата')}
                    {buildStage(4, 'Проверка')}
                </div>
            );

        case '3':
            return (
                <div className="progressbar">
                    {buildActiveStage(1, 'Билеты')}
                    {buildActiveStage(2, 'Пассажиры')}
                    {buildActiveStage(3, 'Оплата')}
                    {buildStage(4, 'Проверка')}
                </div>
            );

        case '4':
            return (
                <div className="progressbar">
                    {buildActiveStage(1, 'Билеты')}
                    {buildActiveStage(2, 'Пассажиры')}
                    {buildActiveStage(3, 'Оплата')}
                    <div className='stage active'>
                        <div className='number'>
                            <span>4</span>
                        </div>
                        <span className='stage-title'>Проверка</span>
                    </div>
                </div>
            );
    }

    function buildStage(number, title) {
        return <>
            <div className='stage inactive'>
                <div className='number'>
                    <span>{number}</span>
                </div>
                <span className='stage-title'>{title}</span>
            </div>

        </>
    }

    function buildActiveStage(number, title) {
        return <div className='stage active'>
            <div className='number'>
                <span>{number}</span>
            </div>
            <span className='stage-title'>{title}</span>
            <div className='stage-arrow active'/>
        </div>
    }
}
