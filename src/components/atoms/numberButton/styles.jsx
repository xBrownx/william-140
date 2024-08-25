import styled, {css} from "styled-components";
import { Font as F, Colour as C, Style as S, pxToViewWidth, pxToViewHeight } from "../globalStyles";


export const Container = styled.div`
    z-index: 2;
    will-change: all;
    transition: all 450ms;
    ${props => props.$isHover && props.$active && css`
        padding-left: 50px;
        cursor: pointer;
    `};
    width: fit-content;
    
`
export const Wrapper = styled.div`
    transition: all 200ms ease;
    ${S.square.width(30)};
    ${F.size(14)};
    ${F.family.secondaryLight};
    ${C.font.paragraphSecondary};
    ${S.flex.centre};
    ${C.button.variant}
    ${S.borderRadius};
    ${S.padding.top(5)};
    
    ${props => props.$active && css`
        font-weight: 700;
        ${C.button.primary};
    `}
    
    
    
    
`