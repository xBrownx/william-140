import styled, {css, keyframes} from "styled-components";
import arrow from "../../assets/icons/LandingDownArrow.svg"
import {media} from "../Media";
import * as FontSize from '../Styled/Font/FontSize'
import * as FontFamily from '../Styled/Font/FontFamily'
import * as FontColour from '../Styled/Font/FontColour'
import * as GLOBAL_STYLES from '../Styled/GlobalStyles'

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

export const TextButtonVariant = styled.button`
    --colour-primary: ${props => props.$secondary ? "#164A49" : "#FFF" };
    --colour-secondary: ${props => props.$secondary ? "#FFF" : "#164A49"};
    
    ${GLOBAL_STYLES.imgBorderRadius};
    ${FontFamily.secondaryRegular};
    ${FontSize._18px};
    ${GLOBAL_STYLES.noMargin}
    
    background: transparent;
    border: 1px solid var(--colour-primary);
    padding: 0.5em 1.5em;
    overflow: hidden;
    color: var(--colour-primary);
    position: relative;
    width: fit-content;
    z-index: 1;

    &:hover {
        cursor: pointer;
        color: #FFF;
    }

    &::after {
        content: "";
        background: #164A49;
        position: absolute;
        z-index: -1;
        padding: 0.5em 1.5em;
        display: block;
        transition: all 0.35s;
        left: 0;
        right: 0;
        top: -100%;
        bottom: 100%;
    }

    &:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.35s;
    }
`

// export const TextButton = styled.div`
//     border-radius: 3%;
//     text-align: center;
//     padding: 0.5em 1.5em;
//
//     width: fit-content;
//     color: #fff;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border: 1px solid #fff;
//     ${buttonAnim};
//
//     p {
//         font-family: var(--font-fmaily-secondary-regular), serif;
//         font-size: var(--font-size-18px);
//         font-weight: 400;
//         color: white;
//         margin: 0;
//         padding: 0;
//     }
//
//     &:hover {
//         background-color: #DED9D0;
//     }
// `

// export const HomeButton = styled.div`
//     border-radius: 4px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     font-family: 'SuisseIntl-Light', serif;
//     width: 15vw;
//     height: 6.79vh;
//     color: #164A49;
//     border: 1px solid #164A49;
//     font-size: 2.222vh;
//     font-weight: 400;
//
//     ${buttonAnim};
//
//     &:hover {
//         background-color: ${({hoverColour}) => hoverColour};
//         color: #fff;
//     }
//
//     ${media.md`
//         padding: 8px 16px 8px 16px;
//         width: fit-content;
//         font-size: 1rem;
//         height: fit-content;
//     `};
// `

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
    position: relative;
    overflow: hidden;
    
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
        //background-color: ${({hoverColour}) => hoverColour};
        filter: brightness(0) saturate(100%) invert(8%) sepia(7%) saturate(3549%) hue-rotate(135deg) brightness(93%) contrast(87%);
    }

    &::after {
        content: "";
        background: #ecf0f1;
        position: absolute;
        z-index: -1;
        padding: 0.5em 1.5em;
        display: block;
        transition: all 0.35s;
        left: 0;
        right: 0;
        top: -100%;
        bottom: 100%;
    }

    &:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.35s;
    }
    
`

export const AvailButton = styled.div`
    ${FontSize._14px}
    ${FontFamily.secondaryBold};
    ${FontColour.primaryTwo};
    ${buttonAnim};
    font-weight: 700;
    background-color: white;
    border-radius: 4px;
    z-index: 5;
    position: absolute;
    padding: 4px 0 0 0;
    height: 3.210vh;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 4.931vw;
    margin: ${({margin}) => margin};

    ${props => props.$large && css`
        width: 10.833vw;
    `}
`






