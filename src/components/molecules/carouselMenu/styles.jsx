import styled, { css } from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    background: #FFF;
    padding: 1.975vh 2.222vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-sizing: border-box;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2.222vw;
    overflow: hidden;
    
    @media only screen and (max-width: 750px) {
        gap: 5px;
    }
`

export const MenuItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.278vw;
    align-items: center;
    
    p {
        margin: 0;
        padding: 0;
        font-weight: 400;
        font-size: 1.975vh;
        opacity: 0.5;
        transition: all 300ms ease;
        ${props => props.$isActive && css`
            opacity: 1;
            color: #164A49;
        `};
        
        @media only screen and (max-width: 750px) {
            font-size: 6pt;
        }
    }

    img {
        width: 2.222vw;
        height: 2.222vw;
        transition: all 300ms ease;
        opacity: 0.5;
        ${props => props.$isActive && css`
            opacity: 1;
            filter: invert(20%) sepia(82%) saturate(370%) hue-rotate(130deg) brightness(94%) contrast(92%);
        `};
        
        
    }
    
    &:hover {
        cursor: pointer;
        animation: y-button-hover 300ms ease-in-out;
        animation-fill-mode: both;
        
        p{
            opacity: 1;
            color: #164A49;
        }
        
        img {
            filter: invert(20%) sepia(82%) saturate(370%) hue-rotate(130deg) brightness(94%) contrast(92%);
            opacity: 1;
        }
    }
    
    @keyframes y-button-hover {
        0% {
            scale: 1;
        }
        40% {
            scale: 1.03;
        }
        60% {
            scale: 1;
        }
        100% {
          
        }
    }

`