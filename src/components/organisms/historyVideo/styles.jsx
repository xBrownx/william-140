import styled, { css } from "styled-components";
import { Style as S } from '../../atoms'

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

export const StyledButton = styled.div`
    
    z-index: 2;
    grid-row: 1;
    grid-column: 1;
    width: 116px;
    height: 116px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: 5px;
    color: white;
    opacity: ${props => props.$isVisible ? 1 : 0};
    background: transparent;
    position: relative;
    
    &:hover {
        cursor: pointer;
        ${props => props.$isPlaying && css`
            opacity: 1;
        `
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