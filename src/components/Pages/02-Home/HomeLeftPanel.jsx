import {ImgWrapper, LeftContainer} from "./Home.styled";
import {ParallaxImg} from "../../ParallaxComponents/ParallaxImg";
import img from "../../../assets/img/07-Amenities-02-Flexible.png";
import React from "react";

export const HomeLeftComponent = () => {
    return (
        <LeftContainer>
            <ImgWrapper>
                <ParallaxImg src={img} alt={""}/>
            </ImgWrapper>
        </LeftContainer>
    );
}