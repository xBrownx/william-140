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

import LazyPage from "../LazyComponents/LazyPage";
import {GlobalStyles} from "../themes/GlobalStyles.css";


const Landing = lazy(() => import( "../Pages/01-Landing/").then(m => ({ default: m.Landing})));
const Home = lazy(() => import("../Pages/02-Home/").then(m => ({ default: m.Home })));
const FullPageImg = lazy(() => import("../Pages/03-FullPageImg/FullPageImg").then(m => ({ default: m.FullPageImg })));
const Lifestyle = lazy(() => import("../Pages/04-Lifestyle/Lifestyle").then(m => ({ default: m.Lifestyle })));
const Location = lazy(() => import("../Pages/05-Location/05-Location").then(m => ({ default: m.Location })));
const Design = lazy(() => import("../Pages/06-Design/06-Design").then(m => ({ default: m.Design })));
const Amenities = lazy(() => import("../Pages/07-Amenities/07-Amenities").then(m => ({ default: m.Amenities })));
const Availability = lazy(() => import("../Pages/08-Availability/08-Availability").then(m => ({ default: m.Availability })));
const ScrollingText = lazy(()=> import ("../09-ScrollingText").then(m => ({ default: m.ScrollingText })));
const History = lazy(() => import("../Pages/10-History/10-History").then(m => ({ default: m.History })));
const Agency = lazy(() => import("../Pages/11-Agency/11-Agency").then(m => ({ default: m.Agency })));
const Enquire = lazy(() => import("../Pages/13-Enquire/13-Enquire").then(m => ({ default: m.Enquire })));

// const FullPageImg1 = lazy(()=> import ('./pages/fullPageImg/Full-Page-Img-1.png'));
function App() {

    const pageRefs = PageRefs()
    return (
        <><GlobalStyles/>
            <div ref={pageRefs.main} className="app-container">

                <ThemeProvider theme={mainTheme}>
                    <Landing
                        id="landing"
                        ref={pageRefs.landing}
                        scrollTo={() => {
                            pageRefs.home.current.scrollIntoView({behavior: "smooth"});
                        }}/>

                    <Home
                        id="home"
                        ref={pageRefs.home}/>

                    <FullPageImg
                        id="FullPageImg"
                        ref={pageRefs.img1}
                        imgSrc={fullPageImg1}/>

                    <Lifestyle
                        id="Lifestyle"
                        ref={pageRefs.lifestyle}/>

                    <Location
                        id="Location"
                        ref={pageRefs.location}/>

                    <FullPageImg
                        id="FullPageImg"
                        ref={pageRefs.img2}
                        imgSrc={fullPageImg2}/>

                    <Design
                        id="Design"
                        ref={pageRefs.design}/>

                    <Amenities
                        id="Amenities"
                        ref={pageRefs.amenities}/>

                    <Availability
                        id="Availability"
                        ref={pageRefs.availability}/>

                    <ScrollingText/>

                    <History
                        id="History"
                        ref={pageRefs.history}/>

                    <FullPageImg
                        id="FullPageImg2"
                        ref={pageRefs.img3}
                        imgSrc={fullPageImg3}/>

                    <Agency
                        id="Agency"
                        ref={pageRefs.agency}/>

                    <FullPageImg
                        id="FullPageImg4"
                        ref={pageRefs.img4}
                        imgSrc={fullPageImg4}/>

                    <Enquire
                        id="enquire"
                        ref={pageRefs.enquire}/>

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
