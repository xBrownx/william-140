import styled, {css} from "styled-components";
import { Style as S } from '../../atoms'
export const StyledImg = styled.img`
    position: relative;
    
    ${props => props.width && css`
        ${S.size.width(props.width)};
    `}
    
    ${props => props.minWidth && css`
        ${S.size.minWidth(props.minWidth)};
    `}
    
    ${props => props.maxWidth && css`
        ${S.size.maxWidth(props.maxWidth)};
    `}
    
    ${props => props.height && css`
        ${S.size.height(props.height)};
    `}
    
    ${props => props.minHeight && css`
        ${S.size.minHeight(props.minHeight)};
    `}
    
    ${props => props.maxHeight && css`
        ${S.size.maxHeight(props.maxHeight)};
    `}
    
    
`