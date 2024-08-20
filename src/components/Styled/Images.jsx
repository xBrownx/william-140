import styled, {css} from 'styled-components'
import {media} from "./Media";
import * as STYLES from './GlobalStyles'

const imgBorderRadius = css`
    img {
        ${STYLES.borderRadius};
    }
`

export const HomeImg = styled.div`
    position: relative;
    display: flex;
    overflow: hidden;
    min-width: 28.05vw;
    min-height: 100%;
    max-width: 31.042vw;
    max-height: 82.222vh;
    
    ${STYLES.borderRadius};
    ${imgBorderRadius};
    
    
    ${media.md`
        width: 100%;
        height: 100%;
        max-height: 100%;
        max-width: 100%;
    `};
`

export const AmenitiesImg = styled.div`
    max-width: 37.778vw;
    max-height: 100vh;
    overflow: hidden;
    ${STYLES.borderRadius};
    ${imgBorderRadius};
    
    ${media.md`
       max-width: 100vw;
       overflow: visible;
       padding-top: 32px;
    `}
`