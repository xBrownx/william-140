
import styled, {css} from "styled-components";
import {Font as F} from '../globalStyles/Font'
import {Style as S} from '../globalStyles/Style'
import {Colour as C} from '../globalStyles/Colour'

export const StyledSubheading = styled.h1`
    ${F.family.secondaryRegular};
    ${F.size(16)};
    ${S.padding.none};
    ${S.margin.__({top: 8})};
    ${C.font.subheadingPrimary};
    font-weight: 400;
    
    ${props => props.$secondary && css`

    `}
    
    ${props => props.$variant && css`
        ${C.font.subheadingSecondary};
    `}
    
`