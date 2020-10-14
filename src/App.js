import React from 'react';

import './style.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Features from "./components/Features/Features";
import Calendar from "./components/Calendar/Calendar";
import Footer from "./components/Footer/Footer";
import Details from "./components/Details/Details";

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Features/>
            {/*<Calendar/>*/}
            {/*<Details/>*/}
            <Footer/>
        </>
    );
}

export default App;