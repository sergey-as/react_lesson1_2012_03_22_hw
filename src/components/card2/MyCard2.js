import React from "react";
import "./MyCard2.css";
import MyImg from "../myImg/MyImg";
import {MyContentBlock} from "../contentblock/MyContentBlock";

export const MyCard2= (props) => {
    return (
        <div>
                <h1>{props.title ?? 'N/A'}</h1>
                <MyImg src={'https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg'} alt={'123'}/>
                <MyContentBlock title={'my other card'}
                                body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid enim iste itaque necessitatibus nulla possimus quasi quod rem soluta. Cum dolores eos molestiae, placeat quaerat quisquam sed totam unde voluptate.'}/>
        </div>
    )
}