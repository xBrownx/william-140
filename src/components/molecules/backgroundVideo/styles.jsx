import styled from "styled-components";

export const Container = styled.div`
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
    };
`

export const StyledVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`