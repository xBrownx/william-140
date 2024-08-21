import styled, { css } from "styled-components";
import {Font as F} from '../globalStyles/Font'
import {Style as S} from '../globalStyles/Style'
import {Colour as C} from '../globalStyles/Colour'

export const StyledHeading = styled.h1`
    ${F.family.primaryLight};
    ${F.size._64px};
    ${S.padding.none};
    ${S.margin.none};
    
    ${C.font.headingPrimary};
    
    ${props => props.$secondary && css`
        ${C.font.headingSecondary};
    `};
`
