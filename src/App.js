import './App.css';
import React from "react";

import Landing from "./pages/1-landing/Landing";
import Home from "./pages/2-home/Home";
import NavBar from "./pages/0-nav/NavBar";
import Location from "./pages/4-location/Location";
import CarouselPage from "./pages/3-carousel/Carousel";
import Design from "./pages/6-design/Design";
import Amenities from "./pages/7-amenities/Amenities";
import HistoryPage from "./pages/8-history/HistoryPage";
import AvailabilityPage from "./pages/9-availability/AvailabilityPage";
import AgencyPage from "./pages/10-agency/AgencyPage";
import EnquiryPage from "./pages/11-enqiry/EnquiryPage";
import {PageRefs} from "./util/PageRefs";
import FullPageImg from "./components/FullPageImg";

import fullPageImgOne from './assets/HomeBackground.jpeg'

function App() {

    const pageRefs= PageRefs()


    return (
        <div className="App">
            <div ref={pageRefs.mainRef} className="app-container">
                <NavBar pageRefs={pageRefs}/>
                <Landing pageRef={pageRefs.landingRef} scrollTo={() => {
                    pageRefs.homeRef.current.scrollIntoView({behavior: "smooth"});
                }}/>

                <Home pageRef={pageRefs}/>
                <CarouselPage mainRef={pageRefs.mainRef} pageRef={pageRefs.carouselRef} />
                <Location pageRef={pageRefs} />
                <FullPageImg pageRef={pageRefs} src={fullPageImgOne}/>
                <Design mainRef={pageRefs.mainRef} pageRef={pageRefs.designRef} />
                <Amenities mainRef={pageRefs.mainRef} pageRef={pageRefs.amenitiesRef} />
                <HistoryPage mainRef={pageRefs.mainRef} pageRef={pageRefs.historyRef} />
                <AvailabilityPage mainRef={pageRefs.mainRef} pageRef={pageRefs.availabilitiesRef} />
                <AgencyPage mainRef={pageRefs.mainRef} pageRef={pageRefs.agencyRef} />
                <EnquiryPage mainRef={pageRefs.mainRef} pageRef={pageRefs.enquiryRef} />
            </div>
        </div>
    );
}

export default App;
