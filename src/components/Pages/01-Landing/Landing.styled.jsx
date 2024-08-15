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

    @media only screen and (max-width: 750px) {
        gap: 0;
        margin: 0 0 160px 0;
        width: 100vw;
        min-width: 100vw;
        min-height: 0;
    }
`

export const Title = styled.div`
    padding: 0 2.222vw;
    overflow: hidden;
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


