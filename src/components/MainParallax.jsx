import {Parallax, ParallaxLayer, ParallaxProps} from '@react-spring/parallax'
import React, {useEffect, useRef, useState} from "react";
import landing from '../assets/old/Landing-bg.png'
import collage from '../assets/old/Collage.png'

import NavBar from "../pages/0-nav/NavBar";
import Landing from "../pages/1-landing/Landing";
import Home from "../pages/2-home/Home";

import './MainParallax.css'
import Lifestyle from "../pages/4-lifestyle/Lifestyle";
import DesignPage from "../pages/6-design/DesignPage";
import AmenitiesPage from "../pages/7-amenities/AmenitiesPage";
import AvailabilityPage from "../pages/9-availability/AvailabilityPage";
import HistoryPage from "../pages/8-history/HistoryPage";
import AgencyPage from "../pages/10-agency/AgencyPage";
import EnquiryPage from "../pages/11-enqiry/EnquiryPage";
import CarouselPage from "../pages/3-carousel/Carousel";
import FullPageVideo from "../pages/999-video/FullPageVideo";
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";


function MainParallax() {

    const pages = 15

    const ref = useRef(null);
    const targetRef = useRef(null);

    const [currentPage, setCurrentPage] = useState(0);
    const [mainOverflow, setMainOverflow] = useState("");


    const {scrollYProgress} = useScroll({
        layoutEffect: false,
        target: targetRef,
    });

    useMotionValueEvent(scrollYProgress, "change",
        (latest) => {
            console.log(`yPos == ${latest}`);
        })

    // useEffect(() => {
    //     // setMainOverflow('hidden')
    //     setTimeout(() => {
    //         //setMainOverflow("")
    //     }, 4000)
    // }, []);

    const scrollToRef = (page) => {
        ref.current.scrollTo(page)
        setCurrentPage(page)
    }

    // const handleScroll = () => {
    //     let page = ref.current.current / ref.current.space
    //     setCurrentPage(page)
    // }

    return (
        // <div onWheel={(e) => handleScroll()}>
        <Parallax
            className="main-parallax"
            pages={pages}
            ref={ref}
            style={{
                top: "0", left: "0", flexDirection: "column",
                overflow: mainOverflow
            }}
        >

            <NavBar
                offset={1}
                factor={1}
                speed={0}
                sticky={{start: 1, end: 16}}
                page={currentPage}
                toTop={() => scrollToRef(0)}
                toLifestyle={() => scrollToRef(3.5)}
                toDesign={() => scrollToRef(5.8)}
                toAmenities={() => scrollToRef(7.5)}
                toAvailibility={() => scrollToRef(10.5)}
                toEnqire={() => scrollToRef(13.5)}
            />

            <ParallaxLayer
                className="home-page-1-bg-parallax"
                sticky={{start: 0, end: 0.5}}
                style={{
                    backgroundImage: `url(${landing})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                    backgroundPosition: "50% 100%",
                    minWidth: "939px",
                    // backgroundPositionY: "100%",
                    zIndex: -1,
                }}/>

            <Landing
                offset={0} factor={1}
                scrollTo={() => {
                    scrollToRef(1);
                    setMainOverflow("scroll");
                }
                }/>

            <ParallaxLayer
                ref={targetRef}
                className="home-2-parallax"
                offset={1}
                style={{background: `var(--primary-bg-colour)`, zIndex: 1}}
            >
                <div className="home-2 home-2-title-container">
                    <div className="home-2 home-2-title-wrapper">
                        <h1 style={{}}>
                            An Iconic Landmark<br/>
                            in Melbourne
                        </h1>
                    </div>
                </div>

            </ParallaxLayer>

            <Home
                // containerRef={ref}
                offset={1}
                factor={1}
                speed={0}
                pages={pages}
            />

            <FullPageVideo offset={2} factor={2} speed={0} sticky={{start: 1, end: 4}}/>

            <Lifestyle offset={3} factor={1} speed={0}/>

            <CarouselPage offset={4} factor={1} speed={0}/>

            <DesignPage offset={5} factor={1} speed={0}/>

            <AmenitiesPage offset={6} factor={1} speed={0}/>

            <HistoryPage offset={7} factor={1} speed={0}/>

            <AvailabilityPage offset={8} factor={1} speed={0}/>

            <AgencyPage offset={9} factor={1} speed={0}/>

            <EnquiryPage offset={10} factor={1} speed={0}/>


        </Parallax>


        // </div>
    )
}

export default MainParallax;


// onWheel={
//     (e) => {
//         if(e.deltaY > 0) {
//             console.log(e.deltaY);
//             ref.current.scrollTo(1)
//         }
//     }
// }
//onClick={() => ref.current.scrollTo(1)}