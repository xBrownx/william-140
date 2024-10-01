import './App.css';
import { preloadVideo } from "@remotion/preload";
import React, { useRef, useEffect, useState, lazy } from "react";
import { imageAssets, videoAssets } from '../../assets/assetLinks';
import { Header, Footer, ScrollingText } from "../organisms";

import ErrorBoundary from "../ErrorBoundary";
import LoadingScreen from "../organisms/loadingScreen";

import Landing from "../pages/landing";
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
import { AnimatePresence } from "framer-motion";


function App() {
    const [imgLoading, setImgLoading] = useState(true);
    const [vidLoading, setVidLoading] = useState(true);
    const [loadCount, setLoadCount] = useState(0);

    const [navBarVisible, setNavBarVisible] = useState(true);

    const totalAssets = imageAssets.length;

    useEffect(() => {
        function loadingBarStatus(current) {
            const loadingBar = document.getElementById('progress-bar');
            const loadingText = document.getElementById('progress-text');
            loadingText.textContent = `${current / totalAssets * 100}%`;
            loadingBar.value = current;
            loadingBar.max = totalAssets;

        }

        let doneCount = 0;
        const handleProgress = (result) => {
            doneCount++;
            setLoadCount(() => doneCount);
            loadingBarStatus(doneCount, totalAssets);
            return result;
        }

        const cacheImages = async (imgArray) => {

            const imgPromises = await imgArray.map((src) => {
                return new Promise(function (resolve, reject) {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                    img.onerror = reject;
                    setLoadCount(prevState => prevState + 1);
                })
            });

            await Promise.all(imgPromises.map(p => p.then(handleProgress)));
        }
        // cacheVideos(videoAssets)
        //     .then(() => console.log("videos cached"))
        //     .catch(err => console.error(err));

        cacheImages(imageAssets)
            .then(() => setTimeout(() => setImgLoading(false), 1000))
            .catch(err => console.error(err));

    }, [])


    const cacheVideos = async (vidArray) => {
        const vidPromises = await vidArray.map((src) => {

            return new Promise(function (resolve, reject) {
                const vid = document.createElement("video");
                vid.src = src;
                vid.onload = resolve;
                vid.onerror = reject;
            });
        });

        await Promise.all(vidPromises).then(() => console.log("loaded videos"));
        setVidLoading(false);
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


    return (

        <ErrorBoundary>
            <AnimatePresence>
                {/*{imgLoading && <LoadingScreen $total={totalAssets} $progress={loadCount} />}*/}
            </AnimatePresence>

                <div ref={pageRefs.main} className="app-container" style={{ mixBlendMode: "screen" }}>
                    {navBarVisible && <Header pageRefs={pageRefs} scrollTo={scrollTo} /> }
                    <Landing ref={pageRefs.landing} scrollTo={() => scrollTo(pageRefs.home)} />
                    <Home ref={pageRefs.home} onDiscoverClick={() => scrollTo(pageRefs.availability)} />
                    <HeroOne />
                    <Lifestyle />
                    <Location ref={pageRefs.location} />
                    <HeroTwo />
                    <Design ref={pageRefs.design} />
                    <Amenities ref={pageRefs.amenities} />
                    <Availability ref={pageRefs.availability} setNavVis={setNavBarVisible} />
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
