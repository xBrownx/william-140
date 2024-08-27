import styled, { css } from 'styled-components';
import { Style as S } from '../../atoms'

export const Container = styled.div`
    width: fit-content;
    
    ${props=> props.$row && css`
        ${S.flex.row}
    `};
    
    ${props => props.$column && css`
        ${S.flex.column}
    `};
    
    ${props => props.padding && css`
        ${S.padding.__(props.padding)};
    `}
    
    ${props => props.paddingInlineBlock && css`
        ${S.padding.inlineBlock(props.paddingInlineBlock)};
    `}
`

export const Wrapper = styled.div`
    ${props=> props.$row && css`
        width: 75%;
    `};
`