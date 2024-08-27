import styled, {css} from "styled-components";
import { Style as S } from '../../atoms'

export const StyledRow = styled.div`
    ${S.flex.row}
    
    ${props => props.padding && css`
        ${S.padding.__(props.padding)};
    `};
    
    ${props => props.margin && css`
        ${S.margin.__(props.margin)};
    `};
    
    ${props => props.gap && css`
        ${S.gap.height(props.gap)};
    `};
    
    ${props => props.$justifySpaceBetween & css`
        justify-content: space-between;
    `}
    
    ${props => props.spaceBetween && css`
        justify-content: space-between;
    `}
`