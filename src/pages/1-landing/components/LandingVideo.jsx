import React, {Component} from 'react'
import video from '../assets/-1843-4306-909c-451abad7e610.mp4'
import {BackgroundContainer, LandingVideo} from "../styles/1-Landing.styled";

export const LandingBackground = () => {
    return (
        <BackgroundContainer>
            <LandingVideo loop muted controls={false}>
                <source src={video} type="video/mp4"/>
            </LandingVideo>
        </BackgroundContainer>
    );
}

