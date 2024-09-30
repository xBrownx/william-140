import styled, { css } from "styled-components";
import { Font as F } from '../globalStyles/Font'
import { Style as S } from '../globalStyles/Style'
import { Colour as C } from '../globalStyles/Colour'
import { Media as M } from '../globalStyles/Media'

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

    ${M.md`
        font-size: 16px;
        line-height: 18.16px;
        weight: 700;
    `};

`