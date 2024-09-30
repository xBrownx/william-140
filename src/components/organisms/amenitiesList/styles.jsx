import styled from "styled-components";
import { Style as S, Media as M } from '../../atoms/'
export const StyledUl = styled.ul`
    ${S.flex.column};
    ${S.margin.top(32)};
    ${S.padding.left(32)};
    ${S.gap.height(16)};
    justify-content: space-between;
    list-style: none;
    border-left: 1px solid #84936E;
    ${M.md`
        margin-top: 16px;
        padding-left: 32px;
        gap: 8px;
    `};
`

export const StyledLi = styled.li`
    ${S.padding.bottom(32)};
    p, svg {
        opacity: 1;
    }
    
    ${M.md`
        padding: 0;
        height: 48px;
    `};
    
`