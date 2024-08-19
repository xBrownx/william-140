import styled, {css} from "styled-components";
import {media} from "../../Media";
import * as Padding from "../../Styled/Padding";
import * as STYLES from "../../Styled/GlobalStyles";
export const SplitScreen = styled.div`
    ${STYLES.flexRow};
    ${Padding.x160};
    ${Padding.y72};
    
    width: 100vw;
    height: 100vh;

    ${media.md`
        ${Padding.x16Mobile};
        ${STYLES.flexColumn};
        height: auto;
    `};
`

export const Pane = styled.div`
    flex: 1;
    align-items: center;

    ${media.md`
        flex: none;
        ${props => props.id === 'left-pane' && css`
            order: 2;
        `};
        
        ${props => props.id === 'right-pane' && css`
            order: 1;
        `};
    `};
`

export const LeftContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: start;
    height: 100%;
    box-sizing: border-box;
    
    ${media.md`
         
    `};
`

export const RightContainer = styled.div`
    ${STYLES.flexColumn};
    justify-content: center;
    height: 100%;
    
    ${media.md`
        justify-content: start;
        padding-block: 4.233vh;
    `};
`

export const ImgWrapper = styled.div`
    position: relative;
    display: flex;
    width: 28.05vw;
    height: 100%;
    max-width: 31.042vw;
    max-height: 82.222vh;
    overflow: hidden;
    ${STYLES.imgBorderRadius};
    
    img {
        ${STYLES.imgBorderRadius};
    }
    
    ${media.md`
        width: 100%;
        height: 100%;
        max-height: 100%;
        max-width: 100%;
    `};
`

export const ContentWrapper = styled.div`
    ${STYLES.flexColumn};
    
    ${Padding.x16};
    
    ${media.md`
        padding: 0;
    `};
`




