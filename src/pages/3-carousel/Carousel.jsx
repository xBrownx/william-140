import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import './Carousel.css'

import {useImgScale} from "../../util/PageRefs";
import {HeadingAnim, ParaAnim} from "../../hooks/TextAnim";
import {PageSection} from "../../components/styles/SectionContainer.styled";
import {PageContainerStyled} from "../../components/styles/PageContainer.styled";
import {CarouselContent} from "./3-Carousel.ui";


function Carousel(props) {

    return (
        <PageSection $secondary ref={props.pageRef.carousel}>
            <PageContainerStyled>
                <CarouselContent />
            </PageContainerStyled>
        </PageSection>
);
}

export default Carousel;