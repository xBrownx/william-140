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

export const StyledButton = styled.div`
    transition: all 200ms ease-in-out;
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
    
    &:hover {
        cursor: pointer;
        ${props => props.$isPlaying && css`
            opacity: 1;
        `
    }
`