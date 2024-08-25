import styled, {css} from "styled-components";
import {
    Style as S,
    Font as F,
    Colour as C,
    Media as M
} from "../globalStyles/";

export const StyledLink = styled.a`
    transition: all 200ms ease-in-out;
    ${F.size(18)};
    ${F.family.secondaryLight};
    ${S.margin.none};
    ${S.padding.none};
    ${C.font.neutral};
    font-weight: 400;

    ${props => props.$underlined && css`
        opacity: 0.7;
        ${props => props.$active && css`
            border-bottom: 1px solid white;
            opacity: 1;
        `}
    `}
    
    ${props => props.$nav && css`

    `}
    
    &:hover {
        color: black;
        cursor: pointer;
        ${props => props.$underlined && css`
            color: white;
            opacity: 1;
        `}
    }
`
