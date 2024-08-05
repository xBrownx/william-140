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
import {useScroll, useTransform} from "framer-motion";

import {motion} from "framer-motion";
import {useImgScale} from "../../util/PageRefs";

function CarouselPage(props) {


    const scale = useImgScale(props.mainRef, 0.381);

    return (
        <motion.div
            ref={props.pageRef}
            className="swiper-container"
        >

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={2}
                    navigation
                    pagination={{clickable: false}}
                    centeredSlides={true}

                >
                    <SwiperSlide>
                        <motion.img style={{scaleX: scale}} src={s1} alt={"slide 1"}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <motion.img style={{scaleX: scale}} src={s2} alt={"slide 2"}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <motion.img style={{scaleX: scale}} src={s3} alt={"slide 3"}/>
                    </SwiperSlide>
                </Swiper>
        </motion.div>

    );
}

export default CarouselPage;