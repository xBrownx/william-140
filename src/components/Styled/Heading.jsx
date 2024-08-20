import styled, {css} from "styled-components";
import * as COLOUR from './Font/FontColour'
import * as FAMILY from './Font/FontFamily'
import * as SIZE from './Font/FontSize'
import * as GLOBAL_STYLES from './GlobalStyles'
import {media} from "./Media";

export const Heading300px = styled.h1`
  ${FAMILY.primaryLight}
  ${COLOUR.primaryOne};
  ${SIZE._300px};
`

export const Dark64Primary = styled.h1`
    ${FAMILY.primaryLight};
    ${SIZE._64px};
    ${COLOUR.primaryTwo};
    ${GLOBAL_STYLES.noMarginPadding};
`

export const Light64Primary = styled.h1`
    ${FAMILY.primaryLight};
    ${SIZE._64px};
    ${COLOUR.primaryNeutral};
    ${GLOBAL_STYLES.noMarginPadding};
`

export const StyledHeading = styled.h1`
    ${FAMILY.primaryLight};
    ${SIZE._64px};
    ${COLOUR.primaryTwo};
    ${GLOBAL_STYLES.noMarginPadding};
    
    ${props => props.$secondary && css`
        ${COLOUR.primaryNeutral};
    `};
    
    ${props => props.$variant && css`
        ${COLOUR.primaryTwo};
    `};
    
    
    ${media.md`
        padding: 0;
        width: 100%;
        font-size: 2.3rem;
        line-height: 2.3rem;
    `};
`

export const Home = styled.h1`
    ${FAMILY.secondaryRegular}
    ${SIZE._16px};
    ${COLOUR.primaryTwo};
    ${GLOBAL_STYLES.noMarginPadding};
    font-weight: 400;
    
    ${media.md`
        width: 100%;
        font-size: 12pt;
        line-height: 14pt;
        color: var(--color-primary-4);
        `
    };
`