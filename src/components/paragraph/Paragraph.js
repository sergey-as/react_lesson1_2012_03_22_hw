import React from 'react';
import './Paragraph.css';
import MySubmit from "../submit/Submit";

function Paragraph(props) {
    return (
        <div className={'myParagraph'}>
            <p>{props.txtP}</p>
            <MySubmit type={'submit'} value={'5 Accept'}/>
        </div>
    );
}

export default Paragraph;
