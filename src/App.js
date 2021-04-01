import './App.css';
import React from "react";
import {MyCard} from './components/card/MyCard'
import {MyCard2} from './components/card2/MyCard2'
import {MyContentBlock} from "./components/contentblock/MyContentBlock";
import {Header} from "./components/header/Header";
import {MyInput} from "./components/input/Input";
import MyImg from "./components/myImg/MyImg";

function App() {
    return (
        <div className="App">
            <hr/>
            <MyCard title="1 title of MyCard" info="info about MyCard" price="$50"/>
            <MyCard title="1 title of MyCard" info="info about MyCard" price="$50"/>
            <hr/>
            <MyContentBlock title="2 title of MyContentBlock" body="body body body"/>
            <hr/>
            <Header txt="3 txt Header" txtP={'6 my paragraph'}/>
            <hr/>
            <MyInput label={'4 MyInput'} type={'text'} name={'name'}/>
            <hr/>
            <MyImg src = {'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg'} alt={'img'}/>
            <MyImg src = {'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg'} alt={'img'}/>
            <MyImg src = {'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg'} alt={'img'}/>
            <hr/>
            <MyCard2 title="7 title of MyCard"/>
        </div>
    );
}

export default App;
