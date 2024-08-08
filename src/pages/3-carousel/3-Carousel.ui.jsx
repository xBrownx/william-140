import {ParagraphOne} from "../../components/styles/Typography.styled";
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';

import {SwiperContainer} from "./3-Carousel.styled";
import {TitleVariantOne} from "../../components/ui/Titles.ui";

import carousel1 from "./assets/Carousel-1.png";
import carousel2 from "./assets/Carousel-2.png";
import carousel3 from "./assets/Carousel-3.png";
import carousel4 from "./assets/Carousel-4.png";
import carousel5 from "./assets/Carousel-5.png";
import carousel6 from "./assets/Carousel-6.png";
import carousel7 from "./assets/Carousel-7.png";
import carousel8 from "./assets/Carousel-8.png";
import {ContentContainer, ContentWrapper, ParagraphWrapper} from "../../components/styles/Content.ui";



const CarouselSwiper = () => {

    const slides = [
        {src: carousel1},
        {src: carousel2},
        {src: carousel3},
        {src: carousel4},
        {src: carousel5},
        {src: carousel6},
        {src: carousel7},
        {src: carousel8},
    ];

    return (
        <SwiperContainer>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView="8"
                slidesPerGroup={1}
                autoplay={{
                    delay: 100,
                    disableOnInteraction: false
                }}
                speed={2000}
                loop={true}
            >
                {
                    slides.map((slide, i) => {
                        return (
                            <SwiperSlide key = {i}>
                                <img src={slide.src} alt={`Carousel ${i}`}/>
                            </SwiperSlide>
                        )
                    })

                }
                {
                    slides.map((slide, i) => {
                        return (
                            <SwiperSlide key = {`${i}_2}`}>
                                <img src={slide.src} alt={`Carousel ${i}`}/>
                            </SwiperSlide>
                        )
                    })

                }

            </Swiper>
        </SwiperContainer>
    );
}


const Paragraph = () => {
    return (
        <ContentWrapper>
            <ParagraphWrapper>
                <ParagraphOne $secondary>The essence of Melbourne's vibrant lifestyle, offering a</ParagraphOne>
                <ParagraphOne $secondary>perfect blend of convenience, culture, and connectivity.</ParagraphOne>
            </ParagraphWrapper>
        </ContentWrapper>
    );
}


export const CarouselContent = () => {
    return (
        <ContentContainer>
            <TitleVariantOne
                lineOne={"Everyday is an"}
                lineTwo={"experience"}
            />
            <CarouselSwiper/>
            <Paragraph/>
        </ContentContainer>
    );
}