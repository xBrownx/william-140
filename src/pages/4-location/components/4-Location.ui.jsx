import React, {useState} from "react";

import 'swiper/css';
import {ReactComponent as Carousel1} from '../assets/Location-1.svg'
import {ReactComponent as Carousel2} from '../assets/Location-2.svg'
import {ReactComponent as Carousel3} from '../assets/Location-3.svg'
import {ReactComponent as Carousel4} from '../assets/Location-4.svg'

import CustomSwiper from "../../../components/ui/CustomSwiper";
import {SwiperContainer} from "../Location.styled";


export const LocationCarouselTrue = () => {
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
