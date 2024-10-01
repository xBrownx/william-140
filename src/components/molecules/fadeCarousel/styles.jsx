import styled, {css} from "styled-components";
import {Style as S, Media as M } from '../../atoms'

export const CarouselContainer = styled.div`
    margin-inline: auto;
    position: relative;
    overflow: hidden;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    ${M.md`
        height: 100%;
        min-width: fit-content;
        overflow: auto;
    `};
`
export const CarouselSlide = styled.div`
    grid-row: 1;
    grid-column: 1;
    width: 100%;
    height: fit-content;
    transition-property: opacity;
    opacity: 0;
    transition-timing-function: ease-in;
    transition-duration: 700ms;
    
    ${props => props.$isActive && css`
        opacity: 1;
        transition-timing-function: ease-out;
    `};
    
    ${M.md`
        box-sizing: unset;
        height: 100%;
        min-width: fit-content;
        overflow: auto;
    `};
    
`

export const ImgContainer = styled.div`
    ${props => props.width && css`
        ${S.size.width(props.width)}
        ${S.size.minWidth(props.width)}
        ${S.size.maxWidth(props.width)}
    `}
    
    ${props => props.height && css`
        ${S.size.height(props.height)}
        ${S.size.maxHeight(props.height)}
        ${S.size.minHeight(props.height)}
    `}
    
    ${S.borderRadius};
    align-items: end;

    ${M.md`
        height: 100%;
        width: 100%;
        min-width: 100vw;
        overflow:scroll;
    `};
`

export const CustomImage = styled.img`
    ${S.borderRadius};
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${M.md`
        min-height: 100%;
        width: auto;
        overflow: auto;
        object-fit: contain !important;
    `};
    
`
