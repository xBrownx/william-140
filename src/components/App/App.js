import './App.css';
import React, {lazy} from "react";
import {ThemeProvider} from "styled-components";

import {PageRefs} from "../../util/PageRefs";
import {mainTheme} from "../themes/MainTheme";


import NavBar from "../NavBar/NavBar";
import fullPageImg1 from '../../assets/img/Full-Page-Img-1.png'
import fullPageImg2 from '../../assets/img/Full-Page-Img-2.png'
import fullPageImg3 from '../../assets/img/Full-Page-Img-3.png'
import fullPageImg4 from '../../assets/img/Full-Page-Img-4.jpeg'
import {GlobalStyles} from "../themes/GlobalStyles.css";
import {PageMinHeights} from "../../constants";

const Landing = lazy(() => import( "../Pages/01-Landing/").then(m => ({ default: m.Landing})));
const Home = lazy(() => import("../Pages/02-Home/").then(m => ({ default: m.Home })));
const FullPageImg = lazy(() => import("../Pages/03-FullPageImg/").then(m => ({ default: m.FullPageImg })));
const Lifestyle = lazy(() => import("../Pages/04-Lifestyle/").then(m => ({ default: m.Lifestyle })));
const Location = lazy(() => import("../Pages/05-Location/").then(m => ({ default: m.Location })));
const Design = lazy(() => import("../Pages/06-Design/").then(m => ({ default: m.Design })));
const Amenities = lazy(() => import("../Pages/07-Amenities/").then(m => ({ default: m.Amenities })));
const Availability = lazy(() => import("../Pages/08-Availability/").then(m => ({ default: m.Availability })));
const ScrollingText = lazy(()=> import ("../Pages/09-ScrollingText/").then(m => ({ default: m.ScrollingText })));
const History = lazy(() => import("../Pages/10-History/").then(m => ({ default: m.History })));
const Agency = lazy(() => import("../Pages/11-Agency/").then(m => ({ default: m.Agency })));
const Enquire = lazy(() => import("../Pages/13-Enquire/").then(m => ({ default: m.Enquire })));


// const FullPageImg1 = lazy(()=> import ('./pages/fullPageImg/Full-Page-Img-1.png'));
function App() {

    const pageRefs = PageRefs()
    const scrollTo = (page) => {
        page.current.scrollIntoView({behavior: "smooth"})
    }
    return (
        <>
            <GlobalStyles/>
            <div ref={pageRefs.main} className="app-container">

                <ThemeProvider theme={mainTheme}>
                    <Landing
                        id="landing"
                        ref={pageRefs.landing}
                        scrollTo={() => scrollTo(pageRefs.home)}/>

                    <Home
                        id="home"
                        ref={pageRefs.home}
                        minHeight={PageMinHeights.home}
                        onDiscoverClick={() => scrollTo(pageRefs.availability)}
                    />

                    <FullPageImg
                        id="FullPageImg"
                        ref={pageRefs.img1}
                        imgSrc={fullPageImg1}
                        minHeight={PageMinHeights.fullPageImg}
                        imgPadding={true}
                    />

                    <Lifestyle
                        id="Lifestyle"
                        ref={pageRefs.lifestyle}
                        minHeight={PageMinHeights.lifestyle}
                    />

                    <Location
                        id="Location"
                        ref={pageRefs.location}
                        minHeight={PageMinHeights.location}
                    />

                    <FullPageImg
                        id="FullPageImg"
                        ref={pageRefs.img2}
                        imgSrc={fullPageImg2}
                        minHeight={PageMinHeights.fullPageImg}
                        bgColour={'#162425'}
                        imgPadding={true}
                    />

                    <Design
                        id="Design"
                        ref={pageRefs.design}
                        minHeight={PageMinHeights.design}
                    />

                    <Amenities
                        id="Amenities"
                        ref={pageRefs.amenities}
                        minHeight={PageMinHeights.amenities}
                    />

                    <Availability
                        id="Availability"
                        ref={pageRefs.availability}
                        minHeight={PageMinHeights.availability}
                    />

                    <ScrollingText
                        minHeight={PageMinHeights.scrollingText}
                    />

                    <History
                        id="History"
                        ref={pageRefs.history}
                        minHeight={PageMinHeights.history}
                    />

                    <FullPageImg
                        id="FullPageImg3"
                        ref={pageRefs.img3}
                        imgSrc={fullPageImg3}
                        minHeight={PageMinHeights.home}
                    />

                    <Agency
                        id="Agency"
                        ref={pageRefs.agency}
                        minHeight={PageMinHeights.agency}
                    />

                    <FullPageImg
                        id="FullPageImg4"
                        ref={pageRefs.img4}
                        imgSrc={fullPageImg4}
                        minHeight={PageMinHeights.fullPageImg}
                        bgColour={'#162425'}
                        imgPadding={true}
                    />

                    <Enquire
                        id="enquire"
                        ref={pageRefs.enquire}
                        minHeight={PageMinHeights.enquire}
                    />

                    <NavBar
                        id="navbar"
                        pageRefs={pageRefs}
                    />
                </ThemeProvider>
            </div>
        </>
    );
}

export default App;
