import {ImgWrapper, LeftContainer} from "./Home.styled";
import {ParallaxImg} from "../../ParallaxComponents/ParallaxImg";
import img from "../../../assets/img/2-lobby.png";
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