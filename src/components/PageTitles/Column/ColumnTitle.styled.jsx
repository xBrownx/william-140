import styled, {css} from "styled-components";
import {media} from "../../Media";

export const Container = styled.div`
    padding: 0 var(--width-160px);
    display: flex;
    flex-direction: column;
    width: fit-content;

    ${media.md`
        padding: 16px;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        overflow: hidden;
    `};
`

export const ParagraphWrapper = styled.div`
    border-left: 1px solid var(--color-primary-4);
    margin: var(--height-38px) 0 0 0;
    padding: 0 0 var(--height-32px) var(--width-32px);

    
    
    ${media.md`
        padding: 0 16px 16px 16px;
        margin: 16px 0 0 0;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        overflow: hidden;
    `};
`

export const StyledParagraph = styled.p`
    margin: 0;
    padding: 0;
    opacity: 0.7;
    color: #164A49;
    font-size: var(--font-size-18px);
    font-family: var(--font-fmaily-secondary-light), serif;
    line-height: var(--line-height-18px);

    ${props => props.$secondary && css`
        color: white;
    `}
    
    ${media.md`
        padding: 0;
        width: 100%;
        max-width: 100%;
        font-size: 10pt;
        line-height: 11pt;
    `};

`

