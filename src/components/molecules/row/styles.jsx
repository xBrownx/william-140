import styled, {css} from "styled-components";
import { Style as S } from '../../atoms'

export const StyledRow = styled.div`
    ${S.flex.row}
    
    ${props => props.padding && css`
        ${S.padding.__(props.padding)};
    `};
    
    ${props => props.gap && css`
        ${S.gap.height(props.gap)};
    `};
    
    ${props => props.spaceBetween && css`
        justify-content: space-between;
    `}
`