import styled, {css} from "styled-components";
import {ReactComponent as DownArrow} from "../assets/icons/LandingDownArrow.svg"
import arrow from "../assets/icons/LandingDownArrow.svg"

export const TextButton = styled.div`
    border-radius: 5%;
    text-align: center;
    padding: 0.5em 1.5em;
    font-family: ${({theme}) => theme.buttons.primary.fontFamily};
    width: fit-content;
    background-color: ${({theme}) => theme.buttons.primary.backgroundColor};
    color: #fff;


    &:hover {
        cursor: pointer;
    }

    ${props => props.$secondary && css`
        background-color: ${({theme}) => theme.buttons.secondary.backgroundColor};
        color: ${({theme}) => theme.buttons.secondary.fontColour};
        //border: 2px solid ${({theme}) => theme.buttons.secondary.fontColour};
    `};

    ${props => props.$variant && css`
        background-color: ${({theme}) => theme.buttons.variant.backgroundColor};
        color: ${({theme}) => theme.buttons.variant.fontColour};
    `};
    
    ${props => props.$large && css`
        padding: 1em 1.5em;
        font-size: 18px;
        border-radius: 2%;
    `};
`

export const ArrowButton = styled.div`
    z-index: 2;
    display: flex;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border-radius: 7%;
    width: 100%;
    height: 100%;
    

    ${props => props.$up && css`
        rotate: 180deg;
    `};

    ${props => props.$right && css`
        rotate: -90deg;
    `};

    ${props => props.$left && css`
        rotate: 90deg;
    `};
    
    ${props => props.$secondary && css`
        filter: brightness(0) saturate(100%) invert(8%) sepia(7%) saturate(3549%) hue-rotate(135deg) brightness(93%) contrast(87%);
    `};

    &:hover {
        cursor: pointer;
        animation: button-hover 300ms ease-in-out;
        animation-fill-mode: both;
        filter: none;
    }
    
    

    @keyframes button-hover {
        0% {
            scale: 1;
        }
        40% {
            scale: 1.1;
        }
        60% {
            scale: 1;
        }
        100% {
            background-color:  ${({theme}) => theme.buttons.primary.backgroundColor};
            
        }
        
    }

`



