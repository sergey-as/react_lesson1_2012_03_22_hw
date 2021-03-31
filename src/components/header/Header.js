import React from "react";
import './Header.css';
import Paragraph from "../paragraph/Paragraph";

export const Header = ({txt, txtP}) => {
    return (
        <div>
            <div className="header">
                <h1>{txt}</h1>
                <Paragraph txtP={txtP}/>
            </div>
        </div>
    )
}