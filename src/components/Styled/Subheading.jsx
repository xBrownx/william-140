import styled, {css} from "styled-components";
import {media} from "./Media";
import * as COLOUR from './Font/FontColour'
import * as FAMILY from './Font/FontFamily'
import * as SIZE from './Font/FontSize'
import {primaryLight} from "./Font/FontFamily";

export const StyledSubheading = styled.h3`
    ${FAMILY.secondaryRegular}
    ${COLOUR.secondaryOne};
    ${SIZE._16px};
    font-weight: 700;
    padding: 0;
    margin: 0 0 var(--height-8px) 0;
    
    ${props => props.$secondary && css`
        ${COLOUR.primaryTwo};
    `}
    
    ${media.md`
        padding: 0;
        width: 100%;
        font-size: 1rem;
        line-height: 1.1rem;
    `};
`