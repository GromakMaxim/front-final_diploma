import React from "react";
import WagonInfo from "./WagonInfo";
import WagonType from "../WagonType";

export default function WagonSection(props) {
    return (
        <>
            <WagonType selected={props.selected}/>
            <WagonInfo selected={props.selected} selectWagon={props.selectWagon} data={props.data}/>
        </>
    );
}
