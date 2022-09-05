import React from "react";
import WagonInfo from "./components/info/WagonInfo";
import WagonType from "./components/type/WagonType";

export default function WagonSection(props) {
    return (
        <>
            <WagonType state={props.state} setState={props.setState}/>
            <WagonInfo state={props.state} setState={props.setState}/>
        </>
    );
}
