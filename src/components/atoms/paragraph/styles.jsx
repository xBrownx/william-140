import styled, { css } from 'styled-components'
import {Style as S, Font as F, Colour as C, Media as M} from '../globalStyles';

export const StyledParagraph = styled.p`
    ${F.family.secondaryRegular};
    ${F.size(18)};
    ${C.font.paragraphPrimary};
    white-space: pre-wrap;
        
    ${props => props.$secondary && css`
        ${C.font.paragraphSecondary};
    `};
    
    ${props => props.opacity && css`
        opacity: ${props.opacity};
    `};
    
    ${props => props.$size16 && css`
        ${F.size(18)};
    `};
    
    ${props => props.size && css`
        ${F.size(props.size)};
    `};
    
    ${props => props.$variant && css`
        ${C.font.paragraphVariant};
        font-weight: 400;
    `};
    
    ${props => props.weight && css`
        font-weight: ${props.weight};
    `}
    
    ${props => props.padding && css`
        ${S.padding.__(props.padding)}
    `}
    
    ${props => props.$noPStyle && css`
        ${S.padding.none}
    `}
    
    ${props => props.lineHeight && css`
        ${F.lineHeight(props.lineHeight)};
    `}
    
    ${props => props.$light && css`
        ${F.family.secondaryLight};
    `}
    
    ${M.md`
        font-size: 14px;
        line-height: 21px;
        opacity: 0.7;
        white-space: wrap;
        padding: 0;
        font-weight: 400;
        
    `};
    
`

