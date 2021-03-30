import './App.css';
import React from "react";
import {MyCard} from './components/card/MyCard'
import {ContentBlock} from "./components/contentblock/ContentBlock";
import {Header} from "./components/header/Header";

function App() {
    return (
        <div className="App">
            <hr/>
            <MyCard title="1 title of MyCard" info="info about MyCard" price="$50"/>
            <hr/>
            <ContentBlock title="2 title of ContentBlock" body="body body body"/>
            <hr/>
            <Header txt="3 txt Header"/>
            <hr/>
            <myInput txt={"4 my input"}/>
        </div>
    );
}

export default App;
