import './App.css';
import React, { useRef, lazy, Suspense, useTransition, useEffect, useState } from "react";
import { Header } from "../organisms";
import Landing from '../pages/Landing'
import ErrorBoundary from "../ErrorBoundary";
import { ScrollingText } from "../organisms";

const Agency = lazy(() => import('../pages/Agency'));
const Amenities = lazy(() => import('../pages/Amenities'));
const Availability = lazy(() => import('../pages/Availability'));
const Design = lazy(() => import('../pages/Design'));
const Enquire = lazy(() => import('../pages/Enquire'));
const Gallery = lazy(() => import('../pages/Gallery'));
const History = lazy(() => import('../pages/History'));
const HeroOne = lazy(() => import('../pages/HeroOne'));
const HeroTwo = lazy(() => import('../pages/HeroTwo'));
const HeroThree = lazy(() => import('../pages/HeroThree'));
const Home = lazy(() => import('../pages/Home'));
const Lifestyle = lazy(() => import('../pages/Lifestyle'));
const Location = lazy(() => import('../pages/Location'));
const Footer = lazy(() => import('../organisms/').then(m => ({ default: m.Footer })));

function App() {

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

    return (
        <ErrorBoundary>
            <div ref={pageRefs.main} className="app-container" style={{mixBlendMode: "screen"}} >
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
