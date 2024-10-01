import styled, { css } from 'styled-components';
import { Style as S, Media as M } from '../../atoms'
export const CustomContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: ${S.height(70)};
    margin-bottom: ${S.height(140)};
    box-sizing: border-box;
    overflow: hidden;
    align-items: center;
    
    ${M.md`
        padding-block: 64px;
        padding-inline: 16px;
        margin-bottom: 0;
    `};
`

export const CustomHeading = styled.h1`
    font-family: 'TWKEverett-Light', serif;
    font-size: ${S.fontSize(54)};
    padding: 0;
    margin: 0;
    font-weight: 300;
    color: #FFF;
    
    ${M.md`
        font-size: 36px;
        line-height: 43.2px;
        width: 100%;
    `};
`

export const CustomColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: ${S.height(32)};
    
    ${M.md`
        gap: 32px;
    `};
    
`