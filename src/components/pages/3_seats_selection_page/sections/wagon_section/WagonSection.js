import React from "react";
import WagonInfo from "./components/info/WagonInfo";
import WagonType from "./components/type/WagonType";

/**
 * секция `тип вагона` и выбор мест
 */
export default function WagonSection(props) {
    return (
        <>
            {/*иконки типов вагонов*/}
            <WagonType state={props.state} setState={props.setState}/>

            {/*инфо о вагоне*/}
            <WagonInfo state={props.state} setState={props.setState} goNext={props.goNext}/>
        </>
    );
}
