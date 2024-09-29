import styled, {css} from "styled-components";
import { Style as S } from '../../atoms'

export const StyledColumn = styled.div`
    ${S.flex.column};
    max-width: 100vw;
    width: 100%;
    height: 100%;
    
    ${props => props.$width && css`
    ${S.size.width(props.$width)};
    `}
    
    ${props => props.$startX && css`
        align-items: start;
    `};
    
    ${props => props.$centreX && css`
        align-items: center;
    `};
    
    ${props => props.$endX && css`
        align-items: end;
    `};
    
    ${props => props.$startY && css`
        justify-content: start;
    `};
    
    ${props => props.$centreY && css`
        justify-content: center;
    `};
    
    ${props => props.$endY && css`
        justify-content: end;
    `};
    
    ${props => props.gap && css`
        ${S.gap.height(props.gap)};
    `};
    
    ${props => props.padding && css`
        ${S.padding.__(props.padding)};
    `};
    
    ${props => props.paddingInlineBlock && css`
        ${S.padding.inlineBlock(props.paddingInlineBlock)};
    `};
    
    ${props => props.borderRadius && css`
        ${S.borderRadius};
    `};
    
    ${props => props.$flexOne && css`
        width: 100%;
        flex: 1;
    `}

    ${props => props.$borderBox && css`
        box-sizing: border-box;
    `}
    
    ${props => props.$fitContent && css`
        width: fit-content;
    `}
`