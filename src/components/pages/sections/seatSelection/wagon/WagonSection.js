import React from "react";
import WagonInfo from "./WagonInfo";
import WagonType from "../WagonType";

export default function WagonSection(props) {
    return (
        <>
            <WagonType/>
            <WagonInfo selected={props.selected} selectWagon={props.selectWagon} data={props.data}/>
        </>
    );
}
