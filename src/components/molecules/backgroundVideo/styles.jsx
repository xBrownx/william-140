import styled, { css } from "styled-components";
import { Style as S } from '../../atoms'
import { Media as M } from '../../atoms';
import { Font as F } from '../../atoms';
import { Colour as C } from "../../atoms";

export const Container = styled.div`
    z-index: 1;
    background-size: cover;
    height: 100vh;
    width: 100vw;
`

export const Wrapper = styled.div`
    z-index: 3;
    position: absolute;
    display: flex;
    flex-direction: column;
    opacity: 1;
    min-width: 82.222vw;
    min-height: 51vh;
    bottom: 32px;
    left: 0;

    ${S.gap.height(32)};
    ${S.padding.__({ right: 32, bottom: 41, left: 32 })};
    
    ${M.md`
        gap: 0;
        padding: 0 0 160px 0;
        margin: 0;
        width: 100%;
        height: 100%;
        min-height: 100%;
        padding-inline: 16px;
        justify-content: end;
        bottom: 0;
        opacity: 1;
    `};
`

export const StyledVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(75%);
`

export const StyledHeading = styled.h1`
    z-index: 2;
    ${F.size(138)};
    ${F.family.primaryLight};
    ${C.font.mainDisplay};
    ${F.lineHeight(128)};
    font-weight: 300;
    
    ${props => props.$justify && css`
        display: flex;
        justify-content: ${props.$justify};
    `};
    opacity: 0.7;
    
    ${props => props.$clone && css`
        z-index: 3;
        color: black !important;
        opacity: 1 !important;
    `};


    ${M.md`
        font-size: 48px !important;
        line-height: 48px !important; 
        height: auto;
        width: 100%;
        margin: 0;
        padding: 0;
        opacity: 1;
    `};
`