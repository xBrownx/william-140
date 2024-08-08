import './App.css';
import React, { lazy, Suspense } from "react";
import {ThemeProvider} from "styled-components";

import {PageRefs} from "./util/PageRefs";
import {mainTheme} from "./themes/MainTheme";

import Landing from "./pages/1-landing/Landing";



// import Home from "./pages/2-home/Home";
import NavBar from "./pages/0-nav/NavBar";
//import Carousel from "./pages/3-carousel/Carousel";
// import Location from "./pages/4-location/Location";
// import FullPageImg from "./components/ui/FullPageImg";
// import Design from "./pages/6-design/Design";
// import Amenities from "./pages/7-amenities/Amenities";
// import History from "./pages/9-history/History";
// import Availability from "./pages/8-availability/Availability";
// import Agency from "./pages/10-agency/Agency";
// import Enquire from "./pages/11-enquire/Enquire";


import fullPageImg1 from './pages/fullPageImg/Full-Page-Img-1.png'
import fullPageImg2 from './pages/fullPageImg/Full-Page-Img-2.png'
import fullPageImg3 from './pages/fullPageImg/Full-Page-Img-3.png'
import RenderOnViewportEntry from "./components/RenderOnViewportEntry";

const Home= lazy(()=> import("./pages/2-home/Home"));
const Carousel= lazy(() => import("./pages/3-carousel/Carousel"));
const Location= lazy(() => import("./pages/4-location/Location"));
const FullPageImg= lazy(() => import("./components/ui/FullPageImg"));
const Design= lazy(() => import("./pages/6-design/Design"));
const Amenities= lazy(() => import("./pages/7-amenities/Amenities"));
const Availability= lazy(() => import("./pages/8-availability/Availability"));
const History= lazy(() => import("./pages/9-history/History"));
const Agency= lazy(() => import("./pages/10-agency/Agency"));
const Enquire= lazy(() => import("./pages/11-enquire/Enquire"));


function App() {

    const pageRefs= PageRefs()

    return (
        <ThemeProvider theme={mainTheme}>
            <div className="App">
                <div ref={pageRefs.main} className="app-container">

                    <Landing pageRef={pageRefs} scrollTo={() => {
                        pageRefs.home.current.scrollIntoView({behavior: "smooth"});
                    }}/>



                    <Home pageRef={pageRefs}/>


                    <RenderOnViewportEntry><Carousel pageRef={pageRefs}/></RenderOnViewportEntry>
                    <RenderOnViewportEntry><Location pageRef={pageRefs}/></RenderOnViewportEntry>
                    <RenderOnViewportEntry><FullPageImg pageRef={pageRefs} src={fullPageImg1}/></RenderOnViewportEntry>
                    <RenderOnViewportEntry><Design pageRef={pageRefs}/></RenderOnViewportEntry>
                    <RenderOnViewportEntry><Amenities pageRef={pageRefs}/></RenderOnViewportEntry>
                    <RenderOnViewportEntry><Availability pageRef={pageRefs}/></RenderOnViewportEntry>
                    <RenderOnViewportEntry><History pageRef={pageRefs}/></RenderOnViewportEntry>
                    <RenderOnViewportEntry><FullPageImg pageRef={pageRefs} src={fullPageImg2}/></RenderOnViewportEntry>
                    <RenderOnViewportEntry><Agency pageRef={pageRefs}/></RenderOnViewportEntry>
                    {/*<FullPageImg pageRef={pageRefs} src={fullPageImg3}/>*/}
                    <Enquire pageRef={pageRefs}/>
                    <NavBar pageRefs={pageRefs}/>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
