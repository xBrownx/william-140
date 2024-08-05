import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';

import './Carousel.css'

import s1 from '../../assets/old/Landing-bg.png'
import s2 from '../../assets/old/140-William.png'
import s3 from '../../assets/old/Frame 69.png'
import Page from "../../components/Page";
import {useSwiper} from "swiper/react";
import {useScroll, useTransform} from "framer-motion";

import {motion} from "framer-motion";
import {useImgScale} from "../../util/PageRefs";
import {Heading} from "../../hooks/TextAnim";
import car1 from '../../assets/carousel/Carousel-1.png'
import car2 from '../../assets/carousel/Carousel-2.png'
import car3 from '../../assets/carousel/Carousel-3.png'
import car4 from '../../assets/carousel/Carousel-4.png'
import car5 from '../../assets/carousel/Carousel-5.png'
import car6 from '../../assets/carousel/Carousel-6.png'
import car7 from '../../assets/carousel/Carousel-7.png'
import car8 from '../../assets/carousel/Carousel-8.png'

function CarouselPage(props) {


    const scale = useImgScale(props.mainRef, 0.381);

    return (
        <section ref={props.pageRef.carouselRef} className="carousel">
            <div className="heading-container">
                <div className="title line-1">
                    <Heading word={"Everyday_is_an"}/>
                </div>
                <div className="title line-1">
                    <Heading word={"experience"}/>
                </div>
            </div>
            <div className="content-container">
                <div className="swiper-container">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={0}
                        slidesPerView="auto"
                        slidesPerGroup={1}
                        autoplay={{
                            delay: 5,
                            disableOnInteraction: false
                        }}
                        speed={2500}
                        loop={true}
                        // slidesPerGroup={6}
                        // navigation
                        pagination={{clickable: false}}
                        // centeredSlides={true}


                    >
                        <SwiperSlide>
                            <img src={car1} alt={"Carousel 1"}/>
                        </SwiperSlide>
                        <SwiperSlide><img src={car2} alt={"Carousel 2"}/></SwiperSlide>
                        <SwiperSlide><img src={car3} alt={"Carousel 3"}/></SwiperSlide>
                        <SwiperSlide><img src={car4} alt={"Carousel 4"}/></SwiperSlide>
                        <SwiperSlide><img src={car5} alt={"Carousel 5"}/></SwiperSlide>
                        <SwiperSlide><img src={car6} alt={"Carousel 6"}/></SwiperSlide>
                        <SwiperSlide><img src={car7} alt={"Carousel 7"}/></SwiperSlide>
                        <SwiperSlide><img src={car8} alt={"Carousel 8"}/></SwiperSlide>

                    </Swiper>
                </div>
                <div className="text-container">
                    <div className="text-wrapper">
                        <p>
                            The essence of Melbourne's vibrant lifestyle, offering a<br/>
                            perfect blend of convenience, culture, and connectivity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CarouselPage;