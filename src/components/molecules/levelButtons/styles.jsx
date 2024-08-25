import styled, {css} from "styled-components";
import {Style as S, Media as M} from '../../atoms'

export const Container = styled.div`
    position: absolute;

    max-width: 100vw;
    width: 100%;
    ${S.flex.column};
    ${S.gap.height(71)};
    
    ${M.xxxxl`
        ${S.padding.__({top: 566, left: 997})};
        ${S.gap.height(74)};
    `}
    
   
`

export const Wrapper = styled.div`
    max-width: 100vw;
    ${S.flex.column};
    
    
    
    ${M.xxxxl`
        ${props => props.$top && css`
            ${S.gap.height(5.5)};
        `};
        
        ${props => props.$bottom && css`
            ${S.gap.height(6)};
        `};
    `};
    
    ${M.xxxl`
        ${props => props.$top && css`
            ${S.gap.height(5.6)};
        `};
        
        ${props => props.$bottom && css`
            ${S.gap.height(6.2)};
        `};
    `};

`

 // ${M.xxxl`
 //        ${S.padding.__({top: 585, left: 997})};
 //        ${S.gap.height(78)};
 //    `};
