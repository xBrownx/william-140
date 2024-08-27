import './App.css';
import React, { useRef, lazy, Suspense, useTransition } from "react";
import { Header } from "../organisms";
import { Landing } from '../pages'

const Agency = lazy(() => import('../pages/').then(m => ({ default: m.Agency })));
const Amenities = lazy(() => import('../pages/').then(m => ({ default: m.Amenities })));
const Availability = lazy(() => import('../pages/').then(m => ({ default: m.Availability })));
const Design = lazy(() => import('../pages/').then(m => ({ default: m.Design })));
const Enquire = lazy(() => import('../pages/').then(m => ({ default: m.Enquire })));
const Gallery = lazy(() => import('../pages/').then(m => ({ default: m.Gallery })));
const History = lazy(() => import('../pages/').then(m => ({ default: m.History })));
const HeroOne = lazy(() => import('../pages/').then(m => ({ default: m.HeroOne })));
const HeroTwo = lazy(() => import('../pages/').then(m => ({ default: m.HeroTwo })));
const HeroThree = lazy(() => import('../pages/').then(m => ({ default: m.HeroThree })));
const Home = lazy(() => import('../pages/').then(m => ({ default: m.Home })));
const Lifestyle = lazy(() => import('../pages/').then(m => ({ default: m.Lifestyle })));
const Location = lazy(() => import('../pages/').then(m => ({ default: m.Location })));
const Footer = lazy(() => import('../organisms/').then(m => ({ default: m.Footer })));
const ScrollingText = lazy(() => import('../organisms/').then(m => ({ default: m.ScrollingText })));

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
        <div ref={pageRefs.main} className="app-container">
            <Header pageRefs={pageRefs} scrollTo={scrollTo} />
            <Landing ref={pageRefs.landing} scrollTo={() => scrollTo(pageRefs.home)} />
            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
        </div>
    );
}

export default App;
