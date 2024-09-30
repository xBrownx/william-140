import './App.css';
import React, { useRef, lazy, Suspense, useTransition, useEffect, useState } from "react";
import { imageAssets, videoAssets } from '../../assets/assetLinks';
import { Header, Footer, ScrollingText } from "../organisms";

import ErrorBoundary from "../ErrorBoundary";
import LoadingScreen from "../organisms/loadingScreen";

import Agency from '../pages/agency';
import Amenities from '../pages/amenities';
import Availability from '../pages/availabality';
import Design from '../pages/design';
import Enquire from '../pages/enquire';
import Gallery from '../pages/gallery';
import History from '../pages/history';
import HeroOne from '../pages/heroOne';
import HeroTwo from '../pages/heroTwo';
import HeroThree from '../pages/heroThree';
import Home from '../pages/home';
import Lifestyle from '../pages/lifestyle';
import Location from '../pages/location';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    
    const cacheAssets = async (imgArray, vidArray) => {
        const imgPromises = await imgArray.map((src) => {
            return new Promise(function (resolve, reject) {
                const img = new Image();
        
                img.src = src;
                img.onload = resolve();
                img.onerror = reject();
            });
        }   

        const vidPromises = await vidArray.map((src) => {
            return new Promise(function (resolve, reject) {
                const vid = new Video();
        
                vid.src = src;
                vid.onload = resolve();
                vid.onerror = reject();
            });
        } 

        await Promises.all(imgPromises);
        await Promises.all(vidPromises);
        setIsLoading(false);
    }
    
    const pageRefs = {
        landing: useRef(),
        home: useRef(),
        location: useRef(),
        design: useRef(),
        amenities: useRef(),
        availability: useRef(),
        history: useRef(),
        agency: useRef(),
        enquire: useRef(),
    }

    const scrollTo = (page) => {
        setTimeout(() => {
            page.current.scrollIntoView({ behavior: "smooth" })
        }, 100);
    }

    useEffect(() => {
        cacheAssets(imageAssets, videoAssets);
    }
    
    return (
        <ErrorBoundary>
            <div ref={pageRefs.main} className="app-container" style={{mixBlendMode: "screen"}} >
                {/*<LoadingScreen />*/}
                <Header pageRefs={pageRefs} scrollTo={scrollTo} />
                <Landing ref={pageRefs.landing} scrollTo={() => scrollTo(pageRefs.home)} />
                    <Home ref={pageRefs.home} onDiscoverClick={() => scrollTo(pageRefs.availability)} />
                    <HeroOne />
                    <Lifestyle />
                    <Location ref={pageRefs.location} />
                    <HeroTwo />
                    <Design ref={pageRefs.design} />
                    <Amenities ref={pageRefs.amenities} />
                    <Availability ref={pageRefs.availability} />
                    <ScrollingText />
                    <History ref={pageRefs.history} />
                    <Gallery />
                    <Agency ref={pageRefs.agency} />
                    <HeroThree />
                    <Enquire ref={pageRefs.enquire} scrollToTop={() => scrollTo(pageRefs.landing)} />
                    <Footer />
            </div>
        </ErrorBoundary>
    );
}

export default App;
