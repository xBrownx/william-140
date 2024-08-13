import {ParallaxImg} from "../../ParallaxComponents";
import img from "../../../assets/img/07-Amenities-02-Flexible.png";
import React from "react";
import styled from "styled-components";

export const HomeLeftComponent = () => {
    return (
        <LeftContainer id="home-left">
            <ImgWrapper>
                <ParallaxImg src={img} alt={""}/>
            </ImgWrapper>
        </LeftContainer>
    );
}

export const LeftContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 8.889vh 7.847vw 8.889vh 11.111vw;
    box-sizing: border-box;
    
    @media only screen and (max-width: 750px) {
         padding: 0;
    }
`

export const ImgWrapper = styled.div`
    position: relative;
    display: flex;
    width: 31.042vw;
    height: 82.222vh;
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