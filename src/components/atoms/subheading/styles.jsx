
import styled, {css} from "styled-components";
import {Font as F} from '../globalStyles/Font'
import {Style as S} from '../globalStyles/Style'
import {Colour as C} from '../globalStyles/Colour'

export const StyledSubheading = styled.h1`
    ${F.family.secondaryRegular};
    ${F.size._16px};
    ${S.padding.none};
    ${S.margin.bottom._8px};
    ${C.font.subheadingPrimary};
    font-weight: 700;
    
    ${props => props.$secondary && css`
        ${C.font.subheadingSecondary};
    `}
    
`