import React, {useEffect, useState} from 'react';
import car1 from '../../assets/location/Location-Carousel-1.png'
import car2 from '../../assets/location/Location-Carousel-2.png'
import car3 from '../../assets/location/Location-Carousel-3.png'
import car4 from '../../assets/location/Location-Carousel-4.png'
import {Heading} from "../../hooks/TextAnim";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {EffectFade, Navigation} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';


function Location(props) {

    const [swiperIdx, setSwiperIdx] = useState(0);

    const carouselNames = [
        "FOOD & BEVERAGES",
        "RETAIL",
        "TRAIN STATIONS",
        "ACCOMMODATION"
    ]

    useEffect(() => {
        console.log(`swiper index = ${swiperIdx}`)
    }, [swiperIdx]);

    return (
        <section ref={props.pageRef.lifestyleRef} className="location">
            <div className="heading-container">
                <div className="sub-heading">
                    <Heading word={"LOCATION"}/>
                </div>
                <div className="title line-1">
                    <Heading word={"Located_in_the"}/>
                </div>
                <div className="title line-2">
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
                    <Swiper
                        modules={[EffectFade, Navigation]}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        loop={true}
                        centeredSlides={true}
                        onSlideChange={(swiper) => {
                            setSwiperIdx(swiper.realIndex)
                        }}
                        effect="fade"
                    >
                        <SwiperSlide>
                            <div className="img-wrapper">
                                <img src={car1} alt={"Carousel 2"}/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="img-wrapper">
                                <img src={car2} alt={"Carousel 2"}/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="img-wrapper">
                                <img src={car3} alt={"Carousel 3"}/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="img-wrapper">
                                <img src={car4} alt={"Carousel 4"}/>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className="footer-container">
                    <p>{carouselNames[swiperIdx]}</p>
                    <SwiperNavigation sidx={swiperIdx.valueOf()}/>
                </div>
            </div>
        </section>
    );
}

const SwiperNavigation = ({sidx}) => {
    return (
        <div>
            <p>{sidx + 1}/4 </p>
        </div>
    )
}

export default Location;