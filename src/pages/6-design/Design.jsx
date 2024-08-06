import React, {useState} from 'react';
import {HeadingAnim} from "../../hooks/TextAnim";


import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Navigation} from "swiper/modules";

import {ReactComponent as Carousel1} from '../../assets/design/Design-1.svg'
import {ReactComponent as Carousel2} from '../../assets/design/Design-2.svg'
import {ReactComponent as Carousel3} from '../../assets/design/Design-3.svg'
import {ReactComponent as Carousel4} from '../../assets/design/Design-4.svg'
import {ReactComponent as Carousel5} from '../../assets/design/Design-5.svg'
import {ReactComponent as Carousel6} from '../../assets/design/Design-6.svg'

import CustomSwiper from "../../components/CustomSwiper";

function Design(props) {

    const imgList = [
        Carousel1,
        Carousel2,
        Carousel3,
        Carousel4,
        Carousel5,
        Carousel6
    ]

    const subtitles = [
        "GROUND LEVEL OVERVIEW",
        "CAFE SERVERY",
        "CAFE LOUNGE",
        "COURTYARD",
        "MAIN RECEPTION",
        "LOBBY LOUNGE"
    ]

    return (
        <section ref={props.pageRef.designRef} className="design">
            <div className="page-container">
                <div className="heading-container">
                    <div className="sub-heading">
                        <HeadingAnim word={"DESIGN"}/>
                    </div>
                    <div className="title line-1">
                        <HeadingAnim word={"A memorable"}/>
                    </div>
                    <div className="title line-2">
                        <HeadingAnim word={"arrival experience"}/>
                    </div>
                </div>

                <CustomSwiper
                    imgList={imgList}
                    subtitles={subtitles}/>
            </div>
        </section>
);
}

export default Design;