import React from 'react';
// import './LifestylePage.css'
import car1 from '../../assets/location/Location-Carousel-1.png'
import car2 from '../../assets/location/Location-Carousel-2.png'
import car3 from '../../assets/location/Location-Carousel-3.png'
import car4 from '../../assets/location/Location-Carousel-4.png'

import Page from "../../components/Page";
import {useHomeAnim} from "../../hooks/HomeAnim";
import {motion} from "framer-motion"
import {usePrimaryTitleAnim, useOffsetAnim} from "../../hooks/Anim";

import {primaryTitleHeadScroll, ScrollConst} from "../../util/PageRefs";
import {Heading} from "../../hooks/TextAnim";

function Lifestyle(props) {

    const pageOffsets = primaryTitleHeadScroll(0.291);

    const anim = usePrimaryTitleAnim(
        props.mainRef,
        pageOffsets,
        [300, 350, 350, 300]
    )

    return (
        <section ref={props.pageRef.lifestyleRef} className="lifestyle">
            <div className="heading-container">
                <div className="sub-heading">
                    <Heading word={"LOCATION"}/>
                </div>
                <div className="title line-1">
                    <Heading word={"Located_in_the"}/>
                </div>
                <div className="title line-1">
                    <Heading word={"heart_of_the_city"}/>
                </div>
            </div>
            <div className="content-container">
                <div className="text-wrapper">
                    <p>
                        Ideally located in the heart of Melbourne CBD, enjoying a prime<br/>
                        position on the corner of Bourke Street and William Street.
                    </p>
                </div>
                <div className="swiper-container">

                </div>
            </div>
        </section>
    );
}

export default Lifestyle;