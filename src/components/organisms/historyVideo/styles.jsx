import styled, { css } from "styled-components";
import { Style as S, Media as M, Font as F, Colour as C } from '../../atoms'

export const CustomContainer = styled.div`
    ${S.borderRadius};
    position: relative;
    display: grid;
    place-items: center;
    margin-inline: auto;
    overflow: hidden;
    width: 100%;
    padding-inline: ${S.width(160)};
    padding-block: ${S.height(32)};
    
    ${M.md`
        padding-inline: 16px;
        padding-top: 32px;
        padding-bottom: 0;
    `};
`

export const StyledVideo = styled.video`
    grid-row: 1;
    grid-column: 1;
    width: 100%;
    ${S.borderRadius}
    opacity: ${props => props.$isVisible ? 1 : 0};
`

export const StyledImg = styled.img`
    grid-row: 1;
    grid-column: 1;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    opacity: ${props => props.$isVisible ? 1 : 0};
`

export const ButtonWrapper = styled.div`
    position: relative;
    transition: opacity 200ms ease-in-out;
    grid-row: 1;
    grid-column: 1;
    opacity: ${props => props.$isVisible ? 1 : 0};

    &:hover {
        cursor: pointer;
        ${props => props.$isPlaying && css`
            opacity: 1;
        `
        }
`

export const CustomButton = styled.div`

    ${F.size(18)};
    ${F.family.secondaryRegular};
    ${S.borderRadius};
    ${S.margin.none};
    ${S.flex.centre};
    ${C.font.primary};
    
    background: transparent;
    border-width: 1px;
    border-style: solid;
    padding: 0.5em 1.5em;
    overflow: hidden;
    position: relative;
    z-index: 1;
    color: white;
    border-color: white;
    width: 150px;
    height: 150px;
    
    
    &:hover {
        cursor: pointer;
        color: #FFF;
    };

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
    };

    &:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.35s;
    };
    
    ${M.md`
        border-radius: 3px;
        width: 64px;
        height: 64px;
        font-size: 16px;
        line-height: 20.75px;
    `};


`