import React from "react";
import WagonInfo from "./components/info/WagonInfo";
import WagonType from "./components/type/WagonType";

export default function WagonSection(props) {
    return (
        <>
            <WagonType selected={props.selected}/>

            <WagonInfo goNext={props.goNext}
                       selectSeatFunc={props.selectSeatFunc}
                       selectedSeatsData={props.selectedSeatsData}
                       selected={props.selected}
                       selectWagon={props.selectWagon}
                       data={props.data}/>
        </>
    );
}
