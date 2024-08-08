import React, {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, Navigation} from 'swiper/modules';
import 'swiper/css';
import {ContentContainer, ContentWrapper, ParagraphWrapper} from "../../components/styles/Content.ui";
import {TitleVariantOne, TitleVariantTwo} from "../../components/ui/Titles.ui";
import {ParagraphOne} from "../../components/styles/Typography.styled";

import {ReactComponent as Carousel1} from './assets/Location-1.svg'
import {ReactComponent as Carousel2} from './assets/Location-2.svg'
import {ReactComponent as Carousel3} from './assets/Location-3.svg'
import {ReactComponent as Carousel4} from './assets/Location-4.svg'
import CustomSwiper from "../../components/ui/CustomSwiper";
import {SwiperContainer} from "./4-Location.styled";

const Paragraph = () => {

    return (
        <ContentWrapper>
            <ParagraphWrapper>
                <ParagraphOne $secondary>Ideally located in the heart of Melbourne CBD, enjoying a prime</ParagraphOne>
                <ParagraphOne $secondary>position on the corner of Bourke Street and William Street.</ParagraphOne>
            </ParagraphWrapper>
        </ContentWrapper>
    );
}

const Swiper1 = () => {
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

    return (
        <SwiperContainer>
            <CustomSwiper
                imgList={imgList}
                subtitles={subtitles}
            />
        </SwiperContainer>
    );
}

export const LocationContent = () => {
    return (
        <ContentContainer>
            <TitleVariantTwo
                subHeading={"LOCATION"}
                lineOne={"Located in the"}
                lineTwo={"heart of the city"}
            />
            <Paragraph/>
            <Swiper1/>
        </ContentContainer>
    );
}