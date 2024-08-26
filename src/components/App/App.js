import './App.css';
import React, {useRef} from "react";
import {
    Agency,
    Amenities,
    Availability,
    Design,
    Enquire,
    Gallery,
    HeroOne,
    HeroTwo,
    HeroThree,
    History,
    Home,
    Landing,
    Lifestyle,
    Location
} from "../ppages";

import {Header} from "../organisms/header";

function App() {

    const pageRefs = {
        landing: useRef(),
        location: useRef(),
        design: useRef(),
        amenities: useRef(),
        availability: useRef(),
        history: useRef(),
        agency: useRef(),
        enquire: useRef(),
    }

    const scrollTo = (page) => {
        setTimeout(() => page.current.scrollIntoView({behavior: "smooth"}), 0);
    }

    return (
        <div ref={pageRefs.main} className="app-container">
            <Header
                pageRefs={pageRefs}
                scrollTo={scrollTo}
            />

            <Landing
                id="landing"
                ref={pageRefs.landing}
                scrollTo={() => scrollTo(pageRefs.home)}/>

            <Home
                id="home"
                ref={pageRefs.home}
                onDiscoverClick={() => scrollTo(pageRefs.availability)}
            />

            <HeroOne/>

            <Lifestyle
                id="Lifestyle"
                ref={pageRefs.lifestyle}
            />

            <Location
                id="Location"
                ref={pageRefs.location}
            />

            <HeroTwo />

            <Design
                id="Design"
                ref={pageRefs.design}
                bgColour={'--color-primary-1'}
            />

            <Amenities
                id="Amenities"
                ref={pageRefs.amenities}
            />

            <Availability
                id="Availability"
                ref={pageRefs.availability}
            />

            {/*<ScrollingText*/}
            {/*    bgColour={'--color-primary-2'}*/}
            {/*    minHeight={PageMinHeights.scrollingText}*/}
            {/*/>*/}

            <History
                id="History"
                ref={pageRefs.history}
            />

            <Gallery
                id="Gallery"
            />

            <Agency
                id="Agency"
                ref={pageRefs.agency}
            />

            <HeroThree />

            <Enquire
                id="enquire"
                ref={pageRefs.enquire}
            />
        </div>
    );
}

export default App;
