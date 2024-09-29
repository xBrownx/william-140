import styled, { css } from "styled-components";
import {
    Style as S,
    Font as F,
    Colour as C,
    Media as M
} from "../globalStyles/";

export const StyledLink = styled.a`
    transition: all 1000ms ease-in-out;
    ${F.size(18)};
    ${F.family.secondaryLight};
    ${S.margin.none};
    ${S.padding.none};
    z-index: 1000;
    font-weight: 400;
    color: white;

    ${props => props.$underlined && css`
        opacity: 0.7;
        ${props => props.$active && css`
            border-bottom: 1px solid white;
            opacity: 1;
        `}
    `}
    
    ${props => props.$nav && css`
        position: relative;
        transition: none;
    `}
    
    &:hover {
        cursor: pointer;
        ${props => props.$underlined && css`
            color: white;
            opacity: 1;
        `}

        ${props => props.$nav && css`
            font-weight: 600;
        `}
    }

height: fit-content;
`

export const StyledNavLink = styled.a`
    all: unset;
    font-size: ${STYLE.fontSize(16)}vw;
    line-height: ${STYLE.height(21.25)}vh;
    letter-spacing: 0;
    font-family: 'MaisonNeueExt', serif;
    color: white;

    transition: all 200ms ease-in-out;
    &:hover {
        cursor: pointer;
        color: ${STYLE.colour.primary};
    }
    
    ${props => props.$isActive && css`
        color: ${STYLE.colour.primary};
        font-weight: 700;
        &:hover {
            cursor: default;
        }
    `}
`
