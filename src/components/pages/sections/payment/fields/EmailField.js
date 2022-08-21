import React from "react";

export default function EmailField(props){
    return (
        <div className="payment-section payment-email">
            <label htmlFor="email">E-mail</label>
            <input
                id="email" name="email" type="email" required=""
                pattern="^(([^<>()[\]\\.,;:\s@&quot;]+(\.[^<>()[\]\\.,;:\s@&quot;]+)*)|(&quot;.+&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$"
                placeholder="inbox@gmail.ru"/>
        </div>
    )
}
