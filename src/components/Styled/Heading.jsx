import styled, {css} from "styled-components";
import * as COLOUR from './Font/FontColour'
import * as FAMILY from './Font/FontFamily'
import * as SIZE from './Font/FontSize'
import {media} from "../Media";

export const Heading300px = styled.h1`
  ${FAMILY.primaryLight}
  ${COLOUR.primaryOne};
  ${SIZE._300px};
`

export const StyledHeading = styled.h1`
    ${FAMILY.primaryLight};
    ${SIZE._64px};
    ${COLOUR.primaryTwo};
    padding: 0;
    margin: 0;
    
    ${props => props.$secondary && css`
        color: #FFF;
    `};
    
    ${media.md`
        padding: 0;
        width: 100%;
        font-size: 2.3rem;
        line-height: 2.3rem;
    `};
`