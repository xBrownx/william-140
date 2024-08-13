import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
    height: 100vh;
    overflow: hidden;

    @media only screen and (max-width: 800px) {
        min-height: 100vh;
    }
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
    
    @media only screen and (max-width: 750px) {
        width: 64px;
        height: 64px;
        margin: 0 16px 32px 0; 
    }
`


