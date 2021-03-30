import './App.css';
import React from "react";
import {MyCard} from './components/Card/MyCard'
import {ContentBlock} from "./components/ContentBlock/ContentBlock";

function App() {
    return (
        <div className="App">
            <hr/>
            <MyCard title="title of MyCard" info="info about MyCard" price="$50"/>
            <hr/>
            <ContentBlock title = "title of ContentBlock" body="body body body"/>
        </div>
    );
}

export default App;
