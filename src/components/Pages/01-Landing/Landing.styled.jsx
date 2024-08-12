import styled from "styled-components";

export const TitleContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
    bottom: 0;
    opacity: 1;
    min-width: 82.222vw;
    min-height: 51vh;
    
    gap: var(--height-32px);
    margin: 0 0 var(--height-32px) 0;
`

export const TitleLine = styled.div`
    padding: 0 2.222vw;
`

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

export const LandingButtonWrapper = styled.div`
    position: absolute;
    display: flex;
    width: 8vh;
    height: 8vh;
    right: 0;
    bottom: 0;
    margin: 0 2vw var(--height-41px) 0;
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


