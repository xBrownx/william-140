import styled, { css } from 'styled-components'
import {Font as F} from '../globalStyles/Font'
import {Style as S} from '../globalStyles/Style'
import {Colour as C} from '../globalStyles/Colour'

export const StyledParagraph = styled.p`
    ${F.family.secondaryRegular};
    ${F.size(18)};
    ${C.font.paragraphPrimary};
        
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
`

