import React from "react";

export default function PhoneField(props){
    return (
        <div className="payment-section payment-phone">
            <label htmlFor="phone">Контактный
                телефон</label>
            <input id="phone" name="phone" type="phone" required=""
                   pattern="^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$"
                   placeholder="+7_ _ _ _ _ _ _ _ _ _"/>
        </div>
    )
}
