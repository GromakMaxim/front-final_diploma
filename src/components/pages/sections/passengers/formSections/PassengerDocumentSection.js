import React from "react";

export default function PassengerDocumentSection(props) {
    return (
        <div className="passenger-form-section passenger-document_type-section">
            <div>
                <label htmlFor="document_type">Тип документа</label>
                <select id="document_type" required name="document_type" defaultValue=''>
                    <option></option>
                    <option name="document_type" value="паспорт">Паспорт РФ</option>
                    <option name="document_type" value="свидетельство">Свидетельство о рождении</option>
                </select>
            </div>
            <div>
                <label htmlFor="document_series">Серия</label>
                <input id="document_series"
                       name="document_series" type="text"
                       placeholder="_ _ _ _" required=""
                       pattern="[0-9]+" minLength="4"
                       maxLength="4" defaultValue=''/>
            </div>
            <div>
                <label htmlFor="document_number">Номер</label>
                <input id="document_number"
                       name="document_number" type="text"
                       placeholder="_ _ _ _ _ _" required=""
                       pattern="[0-9]+" minLength="6"
                       maxLength="6" defaultValue=''/>
            </div>
        </div>
    )
}
