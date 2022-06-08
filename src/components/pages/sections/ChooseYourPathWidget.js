import React from "react";

export default function ChooseYourPathWidget(props) {

    return (
        <div className='widget-search-wrapper'>
            <div className='motto'>
                <span>Вся жизнь - </span>
                <span> путешествие!</span>
            </div>
            <form className='widget-search-ticket'>
                <div className='direction'>
                    <h3>Направление</h3>
                    <div>
                        <input className='from' type='text' placeholder='Откуда'/>
                        <div className='pic-refresh'/>
                        <input className='to' type='text' placeholder='Куда'/>
                    </div>
                </div>
                <div className='date'>
                    <h3>Дата</h3>
                    <div>
                        <input className='from' type='date' placeholder='ДД/ММ/ГГ'/>
                        <div className='pic-refresh'/>
                        <input className='to' type='text' placeholder='ДД/ММ/ГГ'/>
                    </div>
                </div>
                <button type="submit" className="form-search-btn">Найти билет</button>
            </form>
        </div>
    );
}
