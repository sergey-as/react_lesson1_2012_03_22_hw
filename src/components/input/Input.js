import React from 'react';
import MySubmit from "../submit/Submit";
import './Input.css';

export const MyInput = (props) => {
    return(
        <div className={'myinput'}>
            <label>
                {props.label} <input type={props.type} name={props.name}/>
            </label>
            <MySubmit type={'submit'} value={'5 Send'}/>
        </div>
    )
}