import styled, {css} from "styled-components";
import {ReactComponent as DownArrow} from "../../assets/icons/LandingDownArrow.svg"
import arrow from "../../assets/icons/LandingDownArrow.svg"

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

    p {
        font-family: var(--font-fmaily-secondary-regular), serif;
        font-size: var(--font-size-18px);
        font-weight: 400;
        color: white;
        margin: 0;
        padding: 0;
    }

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
    
    &:hover {
        cursor: pointer;
        animation: x-button-hover 300ms ease-in-out;
        animation-fill-mode: both;
    }

    @keyframes x-button-hover {
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
            color: #FFF;
            background-color: #164A49;
        }
    }
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
            background-color: ${({theme}) => theme.buttons.primary.backgroundColor};

        }

    }

`



