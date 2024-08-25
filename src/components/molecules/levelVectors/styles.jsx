import styled, {css} from "styled-components";
import {Style as S, Media as M} from '../../atoms'

export const Container = styled.div`
    position: absolute;

    max-width: 100vw;
   
    ${S.flex.column};
    ${S.gap.height(70)};
    width: auto;

    
    ${M.xxxxl`
        ${S.padding.__({top: 742, left: 487})};
        ${S.gap.height(127)};
    `}
    
    ${M.xxxl`
        ${S.padding.__({top: 770, left: 487})};
        ${S.gap.height(122)};
    `};
`

export const Wrapper = styled.div`
    ${props => props.$bottom && css`
        //transform: translateX(-1px);
    `}
`