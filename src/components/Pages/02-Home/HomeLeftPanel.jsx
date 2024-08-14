import {ParallaxImg} from "../../ParallaxComponents";
import img from "../../../assets/img/07-Amenities-02-Flexible.png";
import React from "react";
import styled from "styled-components";
import * as Padding from '../../Styled/'

export const HomeLeftComponent = () => {
    return (
        <LeftContainer id="home-left">
            <ImgWrapper>
                <img src={img} alt={""}/>
            </ImgWrapper>
        </LeftContainer>
    );
}

export const LeftContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    height: 100%;
    ${Padding.x160};
    ${Padding.y72};
    box-sizing: border-box;
    
    @media only screen and (max-width: 750px) {
         padding: 0;
    }
`

export const ImgWrapper = styled.div`
    position: relative;
    display: flex;
    //width: 31.042vw;
    width: 447px;
    height: 666px;
    //height: 82.222vh;
    
    max-width: 31.042vw;
    max-height: 82.222vh;
    overflow: hidden;
    
    
    @media only screen and (max-width: 750px) {
        padding: 32px 16px;
        width: 100%;
        height: 100%;
        max-height: 100%;
        max-width: 100%;
    }
`