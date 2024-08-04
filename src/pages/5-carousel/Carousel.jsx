import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Carousel.css'

import s1 from '../../assets/Landing-bg.png'
import s2 from '../../assets/140-William.png'
import s3 from '../../assets/Frame 69.png'
import Page from "../../components/Page";
import {useSwiper} from "swiper/react";

function CarouselPage(props) {
    return (
        <div ref={props.pageRef} className="swiper-container">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={2}
                navigation
                pagination={{ clickable: false }}
                centeredSlides={true}
            >
                <SwiperSlide>
                    <img src={s1} alt={"slide 1"}/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={s2} alt={"slide 2"}/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={s3} alt={"slide 3"}/>
                </SwiperSlide>
            </Swiper>
        </div>

    );
}

export default CarouselPage;