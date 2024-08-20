import styled from "styled-components";
import {media} from "../../Styled/Media";
import * as STYLES from '../../Styled/GlobalStyles'

export const LifestyleContainer = styled.div`
    ${STYLES.flexColumn};
    justify-content: center;
    align-self: end;
    height: 100%;
    width: 100%;
    overflow: hidden;
    gap: 3.951vh;
    
    ${media.md`
        gap: 16px;
        height: auto;
    `};
`

export const StyledImg = styled.img`
    object-fit: cover;
    height: 100%;
    width: fit-content;
    margin: 0 20px 0 20px;
    
    ${media.md`
        height: 120px;
        margin: 0 8px;
    `};
`

export const LifestyleCarouselContainer = styled.div`
    height: 37.037vh;
    width: fit-content;
    
    ${media.md`
        height: 120px;
    `};


`