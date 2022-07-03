import Feature from "./Feature";
import React from "react";

export default function Features(props) {
    /**
     * have_first_class - В поезде есть вагон класса «Люкс» (СВ)
     have_second_class - В поезде есть вагон класса «Купе»
     have_third_class - В поезде есть вагон класса «Плацкарт»
     have_fourth_class - В поезде есть вагон с сидячими местами
     */

    let first = null;
    let second = null;
    let third = null;
    let fourth = null;

    if (props.data.have_first_class) {
        first = <Feature type='1' seats={props.data.available_seats_info.first}
                         price={props.data.price_info.first.top_price}/>
    }

    if (props.data.have_second_class) {
        second = <Feature type='2' seats={props.data.available_seats_info.second}
                          price={props.data.price_info.second.top_price}/>
    }

    if (props.data.have_third_class) {
        third = <Feature type='3' seats={props.data.available_seats_info.third}
                         price={props.data.price_info.third.top_price}/>
    }

    if (props.data.have_fourth_class) {
        fourth = <Feature type='4' seats={props.data.available_seats_info.fourth}
                          price={props.data.price_info.fourth.top_price}/>
    }

    return (
        <div className='features'>
            {first}
            {second}
            {third}
            {fourth}
        </div>
    );
}
