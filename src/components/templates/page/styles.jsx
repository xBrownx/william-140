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
    //min-width: 100%;
    height: 100%;
    z-index: 0;
    max-width: 100vw !important;
    overflow: hidden;

    ${props => props.$fullScreen && css`
        min-height: 100vh;
    `};
    
    ${props => props.minHeight && css`
        ${S.size.minHeight(props.minHeight)};
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
    
    ${props => props.paddingInlineBlock && css`
        ${S.padding.inlineBlock(props.paddingInlineBlock)};
        
        ${M.md`
            padding-inline: ${props.paddingInlineBlock.inline};
            padding-block: ${props.paddingInlineBlock.block};
        `};
    `}
    
    ${props => props.padding && css`
        ${S.padding.__(props.padding)};
        
        ${M.md`
            padding-top: ${props.padding.top}px; 
            padding-right: ${props.padding.right}px; 
            padding-bottom: ${props.padding.bottom}px; 
            padding-left: ${props.padding.left}px; 
        `};
    `}

    ${M.md`
        width: 100%;
        min-height: fit-content;
        x-overflow: scroll;
    `};

`
