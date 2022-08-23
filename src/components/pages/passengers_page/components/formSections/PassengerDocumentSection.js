import React, {useState} from "react";

export default function PassengerDocumentSection(props) {
    const [docType, selectDocs] = useState('');

    function selectHandle(e) {
        props.func(e.target.value);
        selectDocs(e.target.value);
    }

    let showThis = null;
    if (docType === 'passport') {
        showThis = (
            <>
                <div>
                    <label htmlFor="document_series">Серия</label>
                    <input id="document_series"
                           name="document_series" type="text"
                           placeholder="_ _ _ _" required=""
                           pattern="[0-9]+" minLength="4"
                           maxLength="4" defaultValue=''
                           onChange={props.setPassportSeries}
                    />
                </div>
                <div>
                    <label htmlFor="document_number">Номер</label>
                    <input id="document_number"
                           name="document_number" type="text"
                           placeholder="_ _ _ _ _ _" required=""
                           pattern="[0-9]+" minLength="6"
                           maxLength="6" defaultValue=''
                           onChange={props.setPassportNumber}/>
                </div>
            </>
        )
    } else if (docType === 'certificate') {
        showThis = (
            <div>
                <label htmlFor="document_number">Номер</label>
                <input id="document_number" name="document_number"
                       type="text" placeholder="VII-АП-123456"
                       required=""
                       pattern="^[IVX]{1,4}[- ]*[а-яёА-ЯЁ]{2}[- ]*[0-9]{6}$"
                       minLength="" maxLength="" defaultValue=''
                       onChange={props.setCertificateNumber}/>
            </div>
        );
    }

    return (
        <div className="passenger-form-section passenger-document_type-section">
            <div>
                <label htmlFor="document_type">Тип документа</label>
                <select id="document_type" required name="document_type" defaultValue='' onChange={selectHandle}>
                    <option></option>
                    <option name="document_type" value="passport">Паспорт РФ</option>
                    <option name="document_type" value="certificate">Свидетельство о рождении</option>
                </select>
            </div>

            {showThis}

        </div>
    )
}
