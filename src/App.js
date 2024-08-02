import './App.css';
import React from "react";
import {useEffect, useRef, useState} from "react";

import Landing from "./pages/0-landing/Landing";
import Home from "./pages/1-home/Home";
import NavBar from "./components/NavBar";

function App() {

    const mainRef = useRef();
    const landingRef = useRef();
    const homeRef = useRef();

    return (
        <div className="App">
            <div ref={mainRef} className="app-container">
                <Landing reff={landingRef} scrollTo={() => { homeRef.current.scrollIntoView({behavior: "smooth"}); }} />
                <NavBar />
                <Home reff={homeRef} />

            </div>
        </div>
    );
}

export default App;
