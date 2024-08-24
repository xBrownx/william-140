import styled from "styled-components";
import {buttonAnim} from "../../Styled/Buttons/Buttons.styled";
import { Style as S } from '../../atoms/'
export const StyledUl = styled.ul`
    ${S.flex.column};
    ${S.margin.top(32)};
    ${S.padding.left(32)};
    ${S.gap.height(16)};
    justify-content: space-between;
    list-style: none;
    border-left: 1px solid #84936E;
    
`

export const StyledLi = styled.li`
    ${S.padding.bottom(32)};
    &:hover {
        cursor: pointer;

        p, svg {
            opacity: 1;
            
        }
    }

    svg {
        opacity: 0.7;
        transition: all 200ms ease-in-out;
    }
    
`