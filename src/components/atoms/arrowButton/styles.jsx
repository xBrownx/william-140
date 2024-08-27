import styled, {css} from "styled-components";

import {
    Style as S,
    Font as F,
    Colour as C,
    Media as M
} from "../globalStyles/";


export const StyledButton = styled.button`
    
    ${F.size(18)};
    ${F.family.secondaryRegular};
    ${S.borderRadius};
    ${S.margin.none};
    ${S.padding.none};
    ${S.flex.centre}
    background: transparent;
    overflow: hidden;
    position: relative;
    z-index: 1;
    width: 100%;
    border: unset;
    
    ${props => props.$secondary && css`
        color: white;
        border-color: white;
    `};
    
    
    &:hover {
        cursor: pointer;
        color: #FFF;
    }
    
    &::after {
        content: "";
        background: #164A49;
        position: absolute;
        z-index: -1;
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
    
    svg {
        width: 100%;
        height: 100%;
        ${props => props.$rotate && css`
        transform: rotate(180deg);
    `}
    }
    
`

export const Wrapper = styled.div`
    z-index: 1;
    ${S.borderRadius};
    ${S.margin.none};
    ${S.padding.none};
    background: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: white;
    overflow: hidden;
    position: relative;
    ${S.square(64)};
`

