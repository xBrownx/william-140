import styled from "styled-components";
import background from "../assets/LandingBackground.png"


export const LandingDisplay = styled.div`
    position: relative;
    left: 0;
    opacity: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    padding: 0 27.5% 7.5% 14.1%;
`

export const BackgroundContainer = styled.div`
    z-index: 0;
    position: absolute;
    // background: url(${background}) no-repeat fixed 50% 50%;
    //background-size: 86.4%;
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

export const LandingButtonWrapper = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 0 1.5% 4.5% 0;
    animation: arrow-appear 1s forwards;
    animation-delay: 1.3s;
    transform: translateY(400%);
    
    @keyframes arrow-appear {
        0% {
            transform: translateY(400%);
        }
        100% {
            transform: translateY(0);
        }
    }
`


