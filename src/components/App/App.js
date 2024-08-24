import './App.css';
import React from "react";
import {PageRefs} from "../../util/PageRefs";
import NavBar from "../organisms/NavBar/NavBar";
import {PageMinHeights} from "../../constants";
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



function App() {

    const pageRefs = PageRefs()
    const scrollTo = (page) => {
        page.current.scrollIntoView({behavior: "smooth"})
    }
    return (
        <div ref={pageRefs.main} className="app-container">

            <NavBar
                id="navbar"
                pageRefs={pageRefs}
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
                bgColour={'--color-primary-2'}
                minHeight={PageMinHeights.lifestyle}
            />

            <Location
                id="Location"
                ref={pageRefs.location}
                bgColour={'--color-primary-2'}
                minHeight={PageMinHeights.location}
            />

            <HeroTwo />

            <Design
                id="Design"
                ref={pageRefs.design}
                bgColour={'--color-primary-1'}
                minHeight={PageMinHeights.design}
            />

            <Amenities
                id="Amenities"
                ref={pageRefs.amenities}
                bgColour={'--color-primary-1'}
                minHeight={PageMinHeights.amenities}
            />

            <Availability
                id="Availability"
                ref={pageRefs.availability}
                minHeight={PageMinHeights.availability}
            />

            {/*<ScrollingText*/}
            {/*    bgColour={'--color-primary-2'}*/}
            {/*    minHeight={PageMinHeights.scrollingText}*/}
            {/*/>*/}

            <History
                id="History"
                ref={pageRefs.history}
                bgColour={'--color-primary-2'}
                minHeight={PageMinHeights.history}
            />

            <Gallery
                id="Gallery"
                ref={pageRefs.img4}
                bgColour={'--color-primary-2'}
                minHeight={PageMinHeights.home}
            />

            <Agency
                id="Agency"
                ref={pageRefs.agency}
                bgColour={'--color-primary-1'}
                minHeight={PageMinHeights.agency}
            />

            <HeroThree />

            <Enquire
                id="enquire"
                ref={pageRefs.enquire}
                bgColour={'--color-primary-1'}
                minHeight={PageMinHeights.enquire}
            />
        </div>
    );
}

export default App;
