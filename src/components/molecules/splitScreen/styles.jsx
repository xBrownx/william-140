import styled, {css} from "styled-components";
import {
    Style as S,
    Colour as C,
    Media as M
} from '../../atoms'

export const Container = styled.div`
    ${S.flex.row};
    width: 100%;
    
    ${props => props.$column && css`
        ${S.flex.column};
    `}
    
    ${props => props.$padding && css`
        ${S.padding.inlineBlock({inline: 160, block: 72})};
    `}
    
    ${M.md`
        height: auto;
    `};
`

export const Pane = styled.div`
    flex: 1;
    align-items: center;

    ${M.md`
        flex: none;
        ${props => props.id === 'left-pane' && css`
            order: 2;
        `};
        
        ${props => props.id === 'right-pane' && css`
            order: 1;
        `};
    `};
`

    // ${Padding.x160};
    // ${Padding.y72};