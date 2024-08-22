import styled, { css } from "styled-components";
import {
    Style as S,
    Font as F,
    Colour as C,
    Media as M
} from "../globalStyles/";

export const StyledLink = styled.a`
   transition: all 200ms ease-in-out;
   ${F.size._18px};
   ${F.family.secondaryRegular};
   ${S.margin.none};
   ${S.padding.none};
   ${C.primary.neutral};
   font-weight: 400;

    ${props => props.$underline && css`
        
    `}

   &:hover {
        color: black;
        cursor: pointer;
   }

  
   
`
