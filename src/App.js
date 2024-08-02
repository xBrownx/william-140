import './App.css';
import React from "react";
import {useEffect, useRef, useState} from "react";

import Landing from "./pages/0-landing/Landing";
import Home from "./pages/2-home/Home";
import NavBar from "./pages/1-nav/NavBar";
import FullPageVideo from "./pages/3-video/FullPageVideo";
import Lifestyle from "./pages/4-lifestyle/Lifestyle";
import CarouselPage from "./pages/5-carousel/Carousel";
import DesignPage from "./pages/6-design/DesignPage";
import AmenitiesPage from "./pages/7-amenities/AmenitiesPage";
import HistoryPage from "./pages/8-history/HistoryPage";
import AvailabilityPage from "./pages/9-availability/AvailabilityPage";
import AgencyPage from "./pages/10-agency/AgencyPage";
import EnquiryPage from "./pages/11-enqiry/EnquiryPage";
import PageRefs from "./util/PageRefs";

function App() {

    const pageRefs= PageRefs()


    return (
        <div className="App">
            <div ref={pageRefs.mainRef} className="app-container">
                <Landing pageRef={pageRefs.landingRef} scrollTo={() => {
                    pageRefs.homeRef.current.scrollIntoView({behavior: "smooth"});
                }}/>
                <NavBar pageRefs={pageRefs}/>
                <Home mainRef={pageRefs.mainRef} pageRef={pageRefs.homeRef}/>
                <FullPageVideo mainRef={pageRefs.mainRef} pageRef={pageRefs.videoRef} />
                <Lifestyle mainRef={pageRefs.mainRef} pageRef={pageRefs.lifestyleRef} />
                <CarouselPage mainRef={pageRefs.mainRef} pageRef={pageRefs.carouselRef} />
                <DesignPage mainRef={pageRefs.mainRef} pageRef={pageRefs.designRef} />
                <AmenitiesPage mainRef={pageRefs.mainRef} pageRef={pageRefs.amenitiesRef} />
                <HistoryPage mainRef={pageRefs.mainRef} pageRef={pageRefs.historyRef} />
                <AvailabilityPage mainRef={pageRefs.mainRef} pageRef={pageRefs.availabilitiesRef} />
                <AgencyPage mainRef={pageRefs.mainRef} pageRef={pageRefs.agencyRef} />
                <EnquiryPage mainRef={pageRefs.mainRef} pageRef={pageRefs.enquiryRef} />
            </div>
        </div>
    );
}

export default App;
