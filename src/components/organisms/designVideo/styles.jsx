import styled, { css } from "styled-components";
import { Style as S } from '../../atoms'
export const Container = styled.div`
    width: 100%;
    ${S.size.height(810)};
    margin: 2% 0 0 0;
    background-color: black;
    position: relative;
`

export const ListWrapper = styled.div`
    flex: 1;
    ${S.padding.__({top: 140, left: 32})}
    z-index: 1000;
`

export const ButtonWrapper = styled.div`
    opacity: 1;
    transition: opacity 0.4s;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    height: fit-content;
    ${S.padding.__({top: 140})}
    ${props => props.$visible && css`
        opacity: 0;
    `}
    button {
        z-index: 1000;
        svg {
            ${S.size.height(24)};
            ${S.size.width(24)};
        }
    } 
`
export const MapWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
    
    ${S.padding.__({top: 48, right: 32})}
    svg {
        ${S.size.width(175)};
        ${S.size.height(219)};
    }
`

export const VideoContainer = styled.div`
    transition: all 200ms;
    opacity: 1;
    width: 100%;
    height: 100%;
    position: absolute !important;
    z-index: 0;
    
    ${props => props.$isLoading && css`
        opacity: 0;
    `};
    
`

export const StyledVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`