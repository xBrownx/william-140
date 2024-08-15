import styled, {css, keyframes} from "styled-components";
import arrow from "../../assets/icons/LandingDownArrow.svg"
import {media} from "../Media";


const bounce = keyframes`
    0% {
        scale: 1;
    }
    50% {
        scale: 1.1;
    }
    100% {
        scale: 1;
    }
`

export const buttonAnim = css`
    transition: all 150ms;
    &:hover {
        cursor: pointer;
        animation: ${bounce} ease-in 200ms;
        animation-fill-mode: both;
    }
`

export const TextButton = styled.div`
    border-radius: 3%;
    text-align: center;
    padding: 0.5em 1.5em;

    width: fit-content;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    ${buttonAnim};
    
    p {
        font-family: var(--font-fmaily-secondary-regular), serif;
        font-size: var(--font-size-18px);
        font-weight: 400;
        color: white;
        margin: 0;
        padding: 0;
    }
    
    &:hover {
        background-color: #DED9D0;
    }
`

export const HomeButton = styled.div`
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'SuisseIntl-Light', serif;
    width: 15vw;
    height: 6.79vh;
    color: #164A49;
    border: 1px solid #164A49;
    font-size: 2.222vh;
    font-weight: 400;
    
    ${buttonAnim};
    
    &:hover {
        background-color: ${({hoverColour}) => hoverColour};
        color: #fff;
    }
    
    ${media.md`
        padding: 8px 16px 8px 16px;
        width: fit-content;
        font-size: 1rem;
        height: fit-content;
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

    ${buttonAnim}

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
        filter: none;
        background-color: ${({hoverColour}) => hoverColour};
    }
`







