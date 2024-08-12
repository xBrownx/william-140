import React from 'react'
import video from '../../../assets/vid/01-Landing.mp4'
import {BackgroundContainer, LandingVideo} from "./Landing.styled";

export const LandingBackground = () => {
    return (
        <BackgroundContainer>
            <LandingVideo autoPlay loop muted controls={false}>
                <source src={video} type="video/mp4"/>
            </LandingVideo>
        </BackgroundContainer>
    );
}

