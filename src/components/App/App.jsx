import './App.css';
import React, { useRef, lazy, Suspense, useTransition, useEffect, useState } from "react";
import { imageAssets, videoAssets } from '../../assets/assetLinks';
import { Header } from "../organisms";
import Landing from '../pages/landing'
import ErrorBoundary from "../ErrorBoundary";
import { ScrollingText } from "../organisms";
import LoadingScreen from "../organisms/loadingScreen";

const Agency = lazy(() => import('../pages/agency'));
const Amenities = lazy(() => import('../pages/amenities'));
const Availability = lazy(() => import('../pages/availabality'));
const Design = lazy(() => import('../pages/design'));
const Enquire = lazy(() => import('../pages/enquire'));
const Gallery = lazy(() => import('../pages/gallery'));
const History = lazy(() => import('../pages/history'));
const HeroOne = lazy(() => import('../pages/heroOne'));
const HeroTwo = lazy(() => import('../pages/heroTwo'));
const HeroThree = lazy(() => import('../pages/heroThree'));
const Home = lazy(() => import('../pages/home'));
const Lifestyle = lazy(() => import('../pages/lifestyle'));
const Location = lazy(() => import('../pages/location'));
const Footer = lazy(() => import('../organisms/').then(m => ({ default: m.Footer })));

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

                <Suspense fallback={<div>Loading...</div>}>
                    <Home ref={pageRefs.home} onDiscoverClick={() => scrollTo(pageRefs.availability)} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <HeroOne />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Lifestyle />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Location ref={pageRefs.location} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <HeroTwo />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Design ref={pageRefs.design} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Amenities ref={pageRefs.amenities} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Availability ref={pageRefs.availability} />
                </Suspense>
                    <ScrollingText />
                <Suspense fallback={<div>Loading...</div>}>
                    <History ref={pageRefs.history} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Gallery />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Agency ref={pageRefs.agency} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <HeroThree />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Enquire ref={pageRefs.enquire} scrollToTop={() => scrollTo(pageRefs.landing)} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Footer />
                </Suspense>
            </div>
        </ErrorBoundary>
    );
}

export default App;
