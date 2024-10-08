import styled, {css} from "styled-components";
import { Font as F, Colour as C, Style as S, pxToViewWidth, pxToViewHeight } from "../globalStyles";


export const Container = styled.div`
    z-index: 2;
    will-change: all;
    transition: all 450ms;
    width: fit-content;
    ${props => props.$isHover && props.$active && css`
        cursor: pointer;
    `};
    
`
export const Wrapper = styled.div`
    transition: all 200ms ease;
    ${S.squareTwo(30)};
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