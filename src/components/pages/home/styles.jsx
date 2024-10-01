import styled, { css } from "styled-components";
import {Style as S, Font as F, Colour as C, Media as M} from '../../atoms';

export const StyledSplitScreen = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-inline: ${S.width(160)};
    padding-block: ${S.height(72)};
    
    ${M.md`
        height: auto;
        flex-direction: column;
        padding-top: 64px;
        padding-inline: 16px;
        padding-bottom: 32px;
        gap: 32px;
    `};
`;

export const Pane = styled.div`
    flex: 1;
    align-items: center;

    ${M.md`
        flex: none;
        
        ${props => props.id === 'left-pane' && css`
            order: 2;
        `};
        
        ${props => props.id === 'right-pane' && css`
            order: 1;
        `};
    `};
`

export const ImgWrapper = styled.div`

    width: ${S.width(470)};
    min-width: ${S.width(470)};
    height: ${S.height(666)};
    min-height: ${S.height(666)};
    ${S.borderRadius};
    img {
        ${S.borderRadius};
    }

    ${M.md`
        width: 100%;
        min-height: unset;
        height: 100%;
    `};
`

export const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-inline: ${S.width(16)};
    gap: ${S.height(32)};

    ${M.md`
        gap: 32px;
        padding-inline: 0;
    `};
`

export const CustomButton = styled.button`

    ${F.size(18)};
    ${F.family.secondaryRegular};
    ${S.borderRadius};
    color: #164A49;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    background: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: #164A49;
    padding: 0.5em 1.5em;
    overflow: hidden;
    position: relative;
    width: fit-content;
    z-index: 1;

    ${M.md`
        height: 34px;
        font-size: 14px;
        line-height: 18.16px;
        padding-inline: 16px;
        padding-block: 8px;
        font-weight: 400;
    `};
    
    
    &:hover {
        cursor: pointer;
        color: #FFF;
    };

    &::after {
        content: "";
        background: #164A49;
        position: absolute;
        z-index: -1;
        padding: 0.5em 1.5em;
        display: block;
        transition: all 0.35s;
        left: 0;
        right: 0;
        top: -100%;
        bottom: 100%;
    };

    &:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.35s;
    };
`

export const CustomSubheading = styled.h2`
    ${F.family.secondaryRegular};
    ${C.font.subheadingSecondary}
    font-size: ${S.fontSize(16)};
    padding: 0;
    margin: 0;
    ;
    font-weight: 400;

    ${M.md`
        font-size: 16px;
        line-height: 18.16px;
        weight: 700;
        ${F.family.secondaryBold};
    `};
`

export const CustomParagraph = styled.p`
    ${F.family.secondaryRegular};
    font-size: ${S.fontSize(36)};
    font-weight: 300;
    ${C.font.paragraphPrimary};
    opacity: 0.7;

    ${M.md`
        font-size: 24px;
        line-height: 28.8px;
        white-space: wrap;
        padding: 0;
    `};
    
    
`