import React from "react";

export default function AvailableFeatures(props) {
    let wifi = "icon wi-fi tooltip";
    let conditioning = "icon conditioning tooltip";
    let linens = "icon linens tooltip";

    if (props.state.wagon.coach.have_wifi) wifi = wifi + " selected";
    if (props.state.wagon.coach.have_air_conditioning) conditioning = conditioning + " selected";
    if (props.state.wagon.coach.is_linens_included) linens = linens + " selected";

    console.log(wifi)
    return (
        <td className="features-icons-list">
            <ul>
                <li className={wifi}/>
                <li className={conditioning}/>
                <li className={linens}/>
            </ul>
        </td>
    )
}
