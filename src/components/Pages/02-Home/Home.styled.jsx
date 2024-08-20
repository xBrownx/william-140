import styled, {css} from "styled-components";
import {media} from "../../Styled/Media";
import * as Padding from "../../Styled/Padding";
import * as STYLES from "../../Styled/GlobalStyles";
export const SplitScreen = styled.div`
    ${STYLES.flexRow};
    ${STYLES.fullScreen};
    ${Padding.x160};
    ${Padding.y72};
    
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

export const ContentWrapper = styled.div`
    ${STYLES.flexColumn};
    ${Padding.x16};
    
    ${media.md`
        padding: 0;
    `};
`




