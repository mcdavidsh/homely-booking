import React from 'react';
import './App.css';
import './index.css';
import {Header} from './layout/Header';
import {Footer} from "./layout/Footer";
import {SearchBar} from "./layout/SearchBar";
import {Content} from "./layout/Content";

function App() {
    return (
        <>

            <Header/>
            <SearchBar/>
            <Content/>
            <Footer/>
        </>
    )
}

export default App;
