import React, {useState} from 'react';
import styled from "styled-components";
import {EffectFade, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';

import {ParagraphThree} from "../styles/Typography.styled";

import {ArrowButton} from "../styles/Buttons.styled";

const SwiperFooterContainer = styled.div`
    margin: 10px 0 0 0;
    z-index: 5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
`

const SwiperSubtitleWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items:center;
`

const SwiperNavWrapper = styled.div`
    z-index: 5;
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: end;
`

const ButtonWrapper = styled.div`
    z-index: 2;
    width: 64px !important;
    height: 64px !important;
`

const CustomSwiper = ({imgList, subtitles}) => {

    const [swiperIdx, setSwiperIdx] = useState(0);

    return (
        <Swiper
            modules={[EffectFade, Navigation]}
            slidesPerView={1}
            slidesPerGroup={1}
            centeredSlides={true}
            effect="fade"
            onSlideChange={(swiper) => {
                setSwiperIdx(swiper.realIndex)
            }}
        >
            {
                imgList.map((Img, i) => (
                <SwiperSlide key={i}>
                    <div className="img-wrapper">
                        <Img />
                        {/*<img src={img} alt={"Lifestyle Item"}/>*/}
                    </div>
                </SwiperSlide>
            ))}

            <SwiperFooter
                swiperIdx={swiperIdx}
                subtitles={subtitles}
            />
        </Swiper>
    );
};




const SwiperFooter = ({swiperIdx, subtitles}) => {
    return (
        <SwiperFooterContainer id={"SwiperFooterContainer"}>
            <SwiperSubtitle
                subtitles={subtitles}
                swiperIdx={swiperIdx}/>
            <SwiperNav
                swiperIdx={swiperIdx}/>

        </SwiperFooterContainer>
    );
};

const SwiperSubtitle = ({subtitles, swiperIdx}) => {
    return (
        <SwiperSubtitleWrapper id={"SwiperSubtitleWrapper"}>
            <ParagraphThree>{subtitles[swiperIdx]}</ParagraphThree>
        </SwiperSubtitleWrapper>
    );
}

const SwiperNav = ({swiperIdx}) => {
    const swiper = useSwiper();
    return (
        <SwiperNavWrapper>
            <ButtonWrapper>
                <ArrowButton $left $secondary onClick={() => {
                    swiper.slidePrev()
                }}/>
            </ButtonWrapper>

            <p>{swiperIdx + 1}/{swiper.slides.length} </p>

            <ButtonWrapper>
                <ArrowButton $right $secondary onClick={() => {
                    swiper.slideNext()
                }}/>
            </ButtonWrapper>

        </SwiperNavWrapper>
    );
}

export default CustomSwiper;