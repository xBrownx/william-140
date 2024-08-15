import styled, {css} from "styled-components";
import {media} from "../../Media";
import * as Padding from "../../Styled/Padding";

export const SplitScreen = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    ${Padding.x160};
    ${Padding.y72};

    ${media.md`
        ${Padding.x16Mobile};
        flex-flow: column;
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
    display: flex;
    flex-direction: column;
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
    
    
    ${media.md`
        width: 100%;
        height: 100%;
        max-height: 100%;
        max-width: 100%;
    `};
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.11vw;
    
    ${media.md`
        padding: 0;
    `};
`

export const StyledH1 = styled.h1`
    font-family: var(--font-fmaily-secondary-bold), serif;
    font-size: var(--font-size-16px);
    font-weight: 700;
    color: var(--color-primary-5);
    margin: 0;
    padding: 0;

    ${media.md`
        width: 100%;
        font-size: 12pt;
        line-height: 14pt;
        color: var(--color-primary-4);
        `
    };
`

export const StyledP = styled.p`
    font-family: "SuisseIntl-Light", serif;
    font-size: var(--font-size-36px);
    line-height: var(--line-height-36px);
    font-weight: 400;
    color: #164A49;
    opacity: 0.7;
    padding: var(--height-8px) 0 var(--height-32px) 0;
    margin: 0;


    ${media.md`
        width: 100%;
        font-size: 14pt;
        line-height: 16pt;
        padding: 1.058vh 0 2.116vh 0;
    `};

`




