import styled, {css} from 'styled-components'
import {
    Style as S,
    Colour as C,
    Media as M
} from '../../atoms'

export const StyledPage = styled.section`
    ${C.background.primary};
    ${S.flex.column};
    
    position: relative;
    min-width: 100%;
    height: 100%;
    
    ${props => props.$fullScreen && css`
        min-height: 100vh;
    `};

    ${props => props.$bgSecondary && css`
        ${C.background.secondary};
    `};

    ${props => props.$xStart && css`
        justify-content: start;
    `};
    
    ${props => props.$xCentre && css`
        justify-content: center;
    `};
    
    ${props => props.$xEnd && css`
        justify-content: end;
    `};

    ${props => props.$yStart && css`
        align-items: start;
    `};
    
    ${props => props.$yCentre && css`
        align-items: center;
    `};
    
    ${props => props.$yEnd && css`
        align-items: end;
    `};


`
