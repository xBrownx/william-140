import styled, { css } from "styled-components";
import {Font as F} from '../globalStyles/Font';
import {Style as S} from '../globalStyles/Style';
import {Colour as C} from '../globalStyles/Colour';
import {Media as M } from '../globalStyles';

export const StyledHeading = styled.h1`
    ${F.family.primaryLight};
    ${F.size(64)};
    ${S.padding.none};
    ${S.margin.none};
    font-weight: 300;
    
    ${C.font.headingPrimary};
    
    ${props => props.$secondary && css`
        ${C.font.headingSecondary};
    `};
    
    ${props => props.$variant && css`
        ${C.font.headingVariant};
        ${F.size(88)};
    `}
    
    ${M.md`
        font-size: 36px;
        line-height: 43.2px;
    `};
`
