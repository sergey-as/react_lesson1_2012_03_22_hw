import React from "react";
import './Header.css';

export const Header = (props) => {
    return (
        <div>
            <div className="header">
                <h1>{props.txt}</h1>
            </div>
        </div>
    )
}