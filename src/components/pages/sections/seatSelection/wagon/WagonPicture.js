import Wagon1 from "../Wagon1";
import React from "react";

export default function WagonPicture(props){
    return (
        <div className="wagon-picture">
            <div className="railway second">
                <div className="railway-number">1</div>
                <div className="railway-cover">
                    <Wagon1/>
                </div>
            </div>
        </div>
    )
}
