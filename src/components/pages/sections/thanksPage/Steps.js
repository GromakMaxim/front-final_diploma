import React from "react";
import Step from "./Step";

export default function Steps(props) {
    return (
        <section className="successful-order-page_action">
            <Step pic='email'>
                <span>билеты будут отправлены на ваш <b>e-mail</b></span>
            </Step>

            <Step pic='print'>
                <span><b>распечатайте </b>и сохраняйте билеты до даты поездки</span>
            </Step>
            <Step pic='control'>
                <span><b>предъявите</b> распечатанные билеты при посадке</span>
            </Step>
        </section>
    )
}
