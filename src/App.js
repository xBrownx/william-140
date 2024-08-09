import './App.css';
import React, {lazy, Suspense} from "react";
import {ThemeProvider} from "styled-components";

import {PageRefs} from "./util/PageRefs";
import {mainTheme} from "./themes/MainTheme";


import NavBar from "./pages/0-nav/NavBar";
import Landing from "./pages/1-landing/Landing";
import Home from "./pages/2-home/Home";

import Lifestyle from "./pages/3-carousel/Lifestyle";
import Location from "./pages/4-location/Location";
import FullPageImg from "./pages/fullPageImg/FullPageImg";
import Design from "./pages/6-design/Design";
import Amenities from "./pages/7-amenities/Amenities";
import Availability from "./pages/8-availability/Availability";
import History from "./pages/9-history/History";
import Agency from "./pages/10-agency/Agency";
import Enquire from "./pages/11-enquire/Enquire";

import fullPageImg3 from './pages/fullPageImg/Full-Page-Img-3.png'
import fullPageImg1 from './pages/fullPageImg/Full-Page-Img-1.png'
import fullPageImg2 from './pages/fullPageImg/Full-Page-Img-2.png'

import RenderOnViewportEntry from "./components/RenderOnViewportEntry";
import ScrollingText from "./pages/ScrollingText";

// const Home= lazy(()=> import("./pages/2-home/Home"));
// const Lifestyle= lazy(() => import("./pages/3-carousel/Lifestyle"));
// const Location= lazy(() => import("./pages/4-location/Location"));
// const FullPageImg= lazy(() => import("./components/ui/FullPageImg"));
// const Design= lazy(() => import("./pages/6-design/Design"));
// const Amenities= lazy(() => import("./pages/7-amenities/Amenities"));
// const Availability= lazy(() => import("./pages/8-availability/Availability"));
// const History= lazy(() => import("./pages/9-history/History"));
// const Agency= lazy(() => import("./pages/10-agency/Agency"));
// const Enquire= lazy(() => import("./pages/11-enquire/Enquire"));

// const FullPageImg1 = lazy(()=> import ('./pages/fullPageImg/Full-Page-Img-3.png'));
function App() {

    const pageRefs = PageRefs()

    return (
        <ThemeProvider theme={mainTheme}>
            <div className="App">
                <div ref={pageRefs.main} className="app-container">

                    <Landing pageRef={pageRefs} scrollTo={() => {
                        pageRefs.home.current.scrollIntoView({behavior: "smooth"});
                    }}/>

                    <Home pageRef={pageRefs}/>
                    <FullPageImg pageRef={pageRefs} src={fullPageImg3}/>
                    <Lifestyle pageRef={pageRefs}/>
                    <Location pageRef={pageRefs}/>
                    <FullPageImg pageRef={pageRefs} src={fullPageImg1}/>
                    <Design pageRef={pageRefs}/>
                    <Amenities pageRef={pageRefs}/>
                    <Availability pageRef={pageRefs}/>
                    <ScrollingText />
                    <History pageRef={pageRefs}/>
                    <FullPageImg pageRef={pageRefs} src={fullPageImg2}/>
                    <Agency pageRef={pageRefs}/>
                    <FullPageImg pageRef={pageRefs} src={fullPageImg3}/>
                    <Enquire pageRef={pageRefs}/>
                    <NavBar pageRefs={pageRefs}/>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
