import './App.css';
import React, {lazy} from "react";
import {PageRefs} from "../../util/PageRefs";
import NavBar from "../NavBar/NavBar";
import fullPageImg1 from '../../assets/img/03-FullPage-01.png'
import fullPageImg2 from '../../assets/img/05-FullPage-02.png'
import fullPageImg3 from '../../assets/img/Full-Page-Img-3.png'
import fullPageImg4 from '../../assets/img/Full-Page-Img-4.jpeg'
import {PageMinHeights} from "../../constants";
import {Gallery} from "../Pages/11--Gallery/Gallery";

const Landing = lazy(() => import( "../Pages/01-Landing/").then(m => ({default: m.Landing})));
const Home = lazy(() => import("../Pages/02-Home/").then(m => ({default: m.Home})));
const FullPageImg = lazy(() => import("../Pages/03-FullPageImg/").then(m => ({default: m.FullPageImg})));
const Lifestyle = lazy(() => import("../Pages/04-Lifestyle/").then(m => ({default: m.Lifestyle})));
const Location = lazy(() => import("../Pages/05-Location/").then(m => ({default: m.Location})));
const Design = lazy(() => import("../Pages/06-Design/").then(m => ({default: m.Design})));
const Amenities = lazy(() => import("../Pages/07-Amenities/").then(m => ({default: m.Amenities})));
const Availability = lazy(() => import("../Pages/08-Availability/").then(m => ({default: m.Availability})));
const ScrollingText = lazy(() => import ("../Pages/09-ScrollingText/").then(m => ({default: m.ScrollingText})));
const History = lazy(() => import("../Pages/10-History/").then(m => ({default: m.History})));
const Agency = lazy(() => import("../Pages/11-Agency/").then(m => ({default: m.Agency})));
const Enquire = lazy(() => import("../Pages/13-Enquire/").then(m => ({default: m.Enquire})));


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
                bgColour={'--color-primary-2'}
                minHeight={PageMinHeights.home}
                onDiscoverClick={() => scrollTo(pageRefs.availability)}
            />

            <FullPageImg
                id="FullPageImg"
                ref={pageRefs.img1}
                imgSrc={fullPageImg1}
                bgColour={'--color-primary-2'}
                minHeight={PageMinHeights.fullPageImg}
                imgPadding={true}
            />

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

            <FullPageImg
                id="FullPageImg"
                ref={pageRefs.img2}
                imgSrc={fullPageImg2}
                minHeight={PageMinHeights.fullPageImg}
                bgColour={'--color-primary-1'}
                imgPadding={true}
            />

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

            <ScrollingText
                bgColour={'--color-primary-2'}
                minHeight={PageMinHeights.scrollingText}
            />

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

            <FullPageImg
                id="FullPageImg4"
                ref={pageRefs.img4}
                imgSrc={fullPageImg4}
                bgColour={'--color-primary-1'}
                minHeight={PageMinHeights.fullPageImg}
                imgPadding={true}
            />

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
