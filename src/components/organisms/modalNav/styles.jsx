import styled, {css} from "styled-components";
import { Style as S, Font as F, Colour as C } from '../../atoms'
export const Container = styled.div`
    width: fit-content;
`

export const Button = styled.div`
    ${S.flex.centre};
    ${S.borderRadius}
    ${S.padding.none};
    ${S.margin.none};
    ${S.size.width(64)};
    ${S.size.height(64)};
    visibility: hidden;
    display: none;
    border: 1px solid white;
    
    ${props => props.$active && css`
        background-color: white;
    `}
    
    ${props => props.$visible && css`
        visibility: unset;
        display: flex;
    `}
    
    p {
        ${F.family.secondaryLight};
        ${F.size(16)};
        color: white;
        font-weight: 700;
        ${props => props.$active && css`
            color: #164A49;
        `}
    }
`