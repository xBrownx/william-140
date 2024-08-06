import React, {useEffect, useState} from 'react';
import {ReactComponent as Carousel1} from '../../assets/location/Location-1.svg'
import {ReactComponent as Carousel2} from '../../assets/location/Location-2.svg'
import {ReactComponent as Carousel3} from '../../assets/location/Location-3.svg'
import {ReactComponent as Carousel4} from '../../assets/location/Location-4.svg'
import {HeadingAnim, ParaAnim} from "../../hooks/TextAnim";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {EffectFade, Navigation} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';
import {PrimaryButton} from "../../components/Buttons";
import CustomSwiper from "../../components/CustomSwiper";

// import {SwiperNavigation} from "../../components/SwiperNavigation";


function Location(props) {

    const [swiperIdx, setSwiperIdx] = useState(0);

    const imgList = [
        Carousel1,
        Carousel2,
        Carousel3,
        Carousel4
    ]

    const subtitles = [
        "FOOD & BEVERAGES",
        "RETAIL",
        "TRAIN STATIONS",
        "ACCOMMODATION"
    ]

    useEffect(() => {
        console.log(`swiper index = ${swiperIdx}`)
    }, [swiperIdx]);

    return (
        <section ref={props.pageRef.locationRef} className="location">
            <div className="page-container">
                <div className="heading-container">
                    <div className="sub-heading">
                        <HeadingAnim word={"LOCATION"}/>
                    </div>
                    <div className="title line-1">
                        <HeadingAnim word={"Located in the"}/>
                    </div>
                    <div className="title line-2">
                        <HeadingAnim word={"heart of the city"}/>
                    </div>
                </div>
                <div className="content-container">
                    <div className="text-wrapper">
                        <ParaAnim line={"Ideally located in the heart of Melbourne CBD, enjoying a prime"} />
                        <ParaAnim line={"position on the corner of Bourke Street and William Street."} />
                    </div>

                    <CustomSwiper
                        imgList={imgList}
                        subtitles={subtitles}/>
                </div>
            </div>
        </section>
    );
}


export default Location;