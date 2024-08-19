import styled, {css} from "styled-components";
import {media} from "../Media";
import * as COLOUR from './Font/FontColour'
import * as FAMILY from './Font/FontFamily'
import * as SIZE from './Font/FontSize'
import * as Padding from './Padding'
import * as GLOBAL_STYLES from './GlobalStyles'

export const Home = styled.p`
    ${FAMILY.secondaryLight}
    ${SIZE._36px};
    ${COLOUR.primaryTwo};
    ${GLOBAL_STYLES.noMargin}
    font-weight: 400;
    padding: var(--height-8px) 0 var(--height-32px) 0;
    
    ${media.md`
        width: 100%;
        font-size: 14pt;
        line-height: 16pt;
        padding: 1.058vh 0 2.116vh 0;
    `};
`