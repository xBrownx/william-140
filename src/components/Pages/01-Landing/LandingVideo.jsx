import React from 'react'
import video from '../../../assets/vid/01-Landing.mp4'
import styled from "styled-components";

export const LandingBackground = () => {
    return (
        <BackgroundContainer>
            <LandingVideo autoPlay loop muted controls={false}>
                <source src={video} type="video/mp4"/>
            </LandingVideo>
        </BackgroundContainer>
    );
}


export const BackgroundContainer = styled.div`
    z-index: 0;
    position: absolute;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    filter: brightness(75%);
    overflow: hidden;

    animation: landing-image-expand 2s forwards;

    @keyframes landing-image-expand {
        0% {
            width: 0;
            height: 0;
        }

        50% {
            width: 50vh;
            height: 50vh;
        }

        60% {
            width: 50vh;
            height: 50vh;
        }
        100% {
            width: 100vw;
            height: 100vh;
        }
    }
`

export const LandingVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

