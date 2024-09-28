import styled, {css} from "styled-components";
import {SwiperSlide} from "swiper/react";

export const Container = styled.div`
    max-width: 100%;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    -webkit-touch-callout: none; 
    -webkit-user-select: none;
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;


`

export const Slide = styled(SwiperSlide)`
    display: flex;
    justify-content: center;
    align-items: center;
    //max-height: 100vh;
    overflow: hidden;
    box-sizing: border-box;
    object-fit: scale-down;
`


export const SwiperImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    
    ${props => props.$rounded && css`
        border-radius: 15px !important;
    `}
`