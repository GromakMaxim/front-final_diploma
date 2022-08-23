import React from "react";

export default function PassengerLimitedMobilitySection(props) {

    function clickHandle(e) {
        props.func(e.target.checked);
    }

    return (
        <div className="passenger-form-section passenger-invalid-section">
            <input id="isInvalid" name="isInvalid" type="checkbox" defaultChecked='false' onChange={clickHandle}/>
            <label htmlFor="isInvalid" className="isInvalid">ограниченная подвижность</label>
        </div>
    )
}
