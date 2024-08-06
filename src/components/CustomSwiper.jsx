import React, {useState} from 'react';
import {EffectFade, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";


import 'swiper/css';
import 'swiper/css/effect-fade';
import {PrimaryButton} from "./Buttons";
import {HeadingAnim, ParaAnim} from "../hooks/TextAnim";

const CustomSwiper = ({imgList, subtitles}) => {

    const [swiperIdx, setSwiperIdx] = useState(0);

    return (
        <div className="swiper-container">
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
                {imgList.map((Img, index) => (
                    <SwiperSlide>
                        <div className="img-wrapper">
                            <Img />
                            {/*<img src={img} alt={"Carousel Item"}/>*/}
                        </div>
                    </SwiperSlide>
                ))}
                <SwiperNavigation
                    swiperIdx={swiperIdx}
                    subtitles={subtitles}
                />
            </Swiper>
        </div>
    );
};

const SwiperNavigation = ({swiperIdx, subtitles}) => {
    const swiper = useSwiper();

    return (
        <div className="footer-container">
            <div className={"subtitle-wrapper"}>
                <ParaAnim line={subtitles[swiperIdx]} />
            </div>
            <div className="swiper-nav-container">

                <div className={swiperIdx === 0 ? "btn-wrapper hidden " : "btn-wrapper"}>
                    <div className="btn-prev">
                        <PrimaryButton onClick={() => {swiper.slidePrev()}}/>
                    </div>
                </div>

                <div className="txt-wrapper">
                    <p>{swiperIdx + 1}/{swiper.slides.length} </p>
                </div>

                <div className={swiperIdx === swiper.slides.length - 1 ? "btn-wrapper hidden" : "btn-wrapper"}>
                    <div className="btn-next">
                        <PrimaryButton onClick={() => {
                            swiper.slideNext()
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomSwiper;