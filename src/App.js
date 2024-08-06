import './App.css';
import React from "react";

import Landing from "./pages/1-landing/Landing";
import Home from "./pages/2-home/Home";
import NavBar from "./pages/0-nav/NavBar";
import Location from "./pages/4-location/Location";
import Carousel from "./pages/3-carousel/Carousel";
import Design from "./pages/6-design/Design";
import Amenities from "./pages/7-amenities/Amenities";
import History from "./pages/9-history/History";
import Availability from "./pages/8-availability/Availability";
import AgencyPage from "./pages/10-agency/AgencyPage";
import EnquiryPage from "./pages/11-enqiry/EnquiryPage";
import {PageRefs} from "./util/PageRefs";
import FullPageImg from "./components/FullPageImg";

import fullPageImg1 from './assets/fullPageImg/Full-Page-Img-1.png'
import fullPageImg2 from './assets/fullPageImg/Full-Page-Img-2.png'
import fullPageImg3 from './assets/fullPageImg/Full-Page-Img-3.png'

function App() {

    const pageRefs= PageRefs()

    return (
        <div className="App">
            <div ref={pageRefs.mainRef} className="app-container">
                <NavBar pageRefs={pageRefs}/>
                <Landing pageRef={pageRefs} scrollTo={() => {
                    pageRefs.homeRef.current.scrollIntoView({behavior: "smooth"});
                }}/>
                <Home pageRef={pageRefs}/>
                <Carousel pageRef={pageRefs} />
                <Location pageRef={pageRefs} />
                <FullPageImg pageRef={pageRefs} src={fullPageImg1}/>
                <Design pageRef={pageRefs} />
                <Amenities pageRef={pageRefs} />
                <Availability pageRef={pageRefs} />
                <History pageRef={pageRefs} />
                <FullPageImg pageRef={pageRefs} src={fullPageImg2}/>
                <AgencyPage pageRef={pageRefs} />
                <FullPageImg pageRef={pageRefs} src={fullPageImg3}/>
                <EnquiryPage pageRef={pageRefs} />
            </div>
        </div>
    );
}

export default App;
