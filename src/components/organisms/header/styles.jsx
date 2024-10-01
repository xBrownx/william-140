import styled, { css } from "styled-components";
import { Style as S, Media as M, Media } from '../../atoms'

export const Container = styled.div`
    ${S.size.height(90)};
    ${S.flex.centre};
    ${S.padding.__({right: 32, left: 32})};
    z-index: 1;
    position: fixed;
    top: 0;
    width: 100%;

    ${M.md`
        height: 70px;
        padding-inline: 16px; 
        box-sizing: border-box;
    `};
`

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    z-index: 10;
    width: 100%;

    img {
        z-index: 10;
        min-height: 2.099vh;
        min-width: 19.097vw;

        ${M.md`
            width: 190px;
            height: 11px;
        `};

        &:hover {
            cursor: pointer;
        }
    }
    
    ${Media.md`
        align-items: end;
        justify-content: end;
        box-sizing: border-box;
    `}
`

export const IconWrapper = styled.div`
    display: none;
    width: 32px;
    height: 32px;
    margin-right: 16px;
    
    ${Media.md`
        display: flex;
    `}
    
    img {
        width: 100%;
        height: 100%;
    }
`

export const MobileMenuContainer = styled.div`
    transition: all 200ms ease-out;
    background: #162425;
    width: 100%;
    
    z-index: 10;
    position: fixed;
    display: flex;
    flex-direction: column;
    height: 0;
    
    ${props => props.$visible && css`
        height: 100%;
    `};
    overflow: hidden;
`

export const CustomColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    padding-top: 16px;
    padding-inline: 16px;
    gap: 72px;
`

export const CustomRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`

export const MobileUl = styled.ul`
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    padding-right: 16px;
    gap: 16px;
    padding-bottom: 32px;
`

export const CustomHeading = styled.h2`
    color: white;
    font-weight: 300;
    font-size: 36px;
    line-height: 47.56px;
`