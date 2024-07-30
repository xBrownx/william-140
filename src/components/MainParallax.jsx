import {Parallax, ParallaxLayer, ParallaxProps} from '@react-spring/parallax'
import React, {useEffect, useRef, useState} from "react";
import landing from '../assets/Landing-bg.png'
import collage from '../assets/Collage.png'

import NavBar from "./NavBar";
import HomePage1 from "../pages/1-home/HomePage-1";
import HomePage2 from "../pages/1-home/HomePage-2";

import './MainParallax.css'
import LifestylePage from "../pages/2-lifestyle/LifestylePage";
import DesignPage from "../pages/3-design/DesignPage";
import AmenitiesPage from "../pages/4-amenities/AmenitiesPage";
import AvailabilityPage from "../pages/6-availability/AvailabilityPage";
import HistoryPage from "../pages/5-history/HistoryPage";
import AgencyPage from "../pages/7-agency/AgencyPage";
import EnquiryPage from "../pages/8-enqiry/EnquiryPage";
import CarouselPage from "./Carousel";
import FullPageVideo from "./FullPageVideo";
import HomePageBg from "../pages/1-home/HomePageBg";



function MainParallax() {


    const ref = useRef();

    const [currentPage, setCurrentPage] = useState(0);

    const scrollToRef = (page) => {
        ref.current.scrollTo(page)
        setCurrentPage(page)
        console.log(page)
    }

    const handleScroll = () => {
        let page = ref.current.current / ref.current.space
        setCurrentPage(page)
        console.log(page)
    }

    useEffect(() => {

    }, [])

    return (
        <div onWheel={(e) => handleScroll()}>
            <div style={{height: "100vh"}} />


            <Parallax
                className="main-parallax"
                pages={14}
                ref={ref}
                style={{
                    top: "0", left: "0", flexDirection: "column",
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
                    toDesign={() => scrollToRef(6)}
                    toAmenities={() => scrollToRef(7.5)}
                    toAvailibility={() => scrollToRef(10.5)}
                    toEnqire={() => scrollToRef(13)}
                />

                <HomePageBg offset={0} factor={0} sticky={{start: 0, end: 1}} />

                <HomePage1 offset={0} factor={1} scrollTo={() => scrollToRef(1)} />

                <HomePage2 offset={1} factor={1.5} speed={0} />

                <FullPageVideo offset={2.5} factor={1} speed={0} sticky={{start: 1, end: 3.4}}/>

                <LifestylePage offset={3.5} factor={1.5} speed={0} />

                <CarouselPage offset={5.1} factor={1} speed={0} />

                <DesignPage offset={5.8} factor={1.5} speed={0} />

                <AmenitiesPage offset={7.5} factor={1.5} speed={0} />

                <HistoryPage offset={9} factor={1.5} speed={0} />

                <AvailabilityPage offset={10.5} factor={1.5} speed={0} />

                <AgencyPage offset={12} factor={1} speed={0} />

                <EnquiryPage offset={13} factor={1} speed={0} />

            </Parallax>



        </div>
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