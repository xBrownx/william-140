import styled, {css} from "styled-components";
import {Style as S, Media as M} from '../../atoms'

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    gap: 0.12%;
    padding: 35.55% 0 0 69%;
`

export const Wrapper = styled.div`
    height: 42%;
    width: fit-content;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 0.76%;
    
    ${props => props.$bottom && css`
        gap: 0.84%;
    `}
    
`
//${S.flex.column};
 // ${M.xxxl`
 //        ${S.padding.__({top: 585, left: 997})};
 //        ${S.gap.height(78)};
 //    `};

// ${S.gap.height(71)};

// ${M.xxxxl`
//         ${S.padding.__({top: 566, left: 997})};
//         ${S.gap.height(74)};
//     `}







 // ${M.xxxxl`
 //        ${props => props.$top && css`
 //            ${S.gap.height(5.5)};
 //        `};
 //
 //        ${props => props.$bottom && css`
 //            ${S.gap.height(6)};
 //        `};
 //    `};
 //
 //    ${M.xxxl`
 //        ${props => props.$top && css`
 //            ${S.gap.height(5.6)};
 //        `};
 //
 //        ${props => props.$bottom && css`
 //            ${S.gap.height(6.2)};
 //        `};
 //    `};
