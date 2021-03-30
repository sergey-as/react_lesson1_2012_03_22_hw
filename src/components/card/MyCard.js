import React from "react";
import "./MyCard.css";

export const MyCard = (props) => {
    return (
        <div>
            <div className="myCard">
                <h1>{props.title ?? 'N/A'}</h1>
                <h2>{props.info ?? 'N/A'}</h2>
                <h3>{props.price ?? 'N/A'}</h3>
            </div>
        </div>
    )
}