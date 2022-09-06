import React from "react";

export default function PassengerAgeSection(props) {
    return (
        <div className="passenger-form-section passenger-type-section">
            <label htmlFor="person_type" className="hidden">Тип
                пассажира</label>
            <select id="person_type" name="person_type" onChange={props.setAge}>
                <option></option>
                <option name="person_type" value="is_adult">Взрослый</option>
                <option name="person_type" value="is_child">Детский</option>
            </select>
        </div>
    )
}
