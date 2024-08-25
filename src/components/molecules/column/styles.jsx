import styled, {css} from "styled-components";
import { Style as S } from '../../atoms'

export const StyledColumn = styled.div`
    ${S.flex.column};
    height: 100%;
    
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
    
    ${props => props.$flex && css`
        //flex: 1;
    `}
`