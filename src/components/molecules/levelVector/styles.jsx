import styled, {css} from "styled-components";
import {Style as S, Media as M} from '../../atoms'
import {pxToViewHeight, pxToViewWidth} from "../../atoms/globalStyles";

export const Wrapper = styled.div`
    position: absolute;
    z-index: 5;
    width: 51.45%;
    margin: ${props => props.offset}% 0 0 0;
    mix-blend-mode: overlay;
    svg {
        opacity: 0;
        width: 100%;
        height: 100%;
        ${props => props.$active && css`
            transition: opacity 200ms;
            transition-timing-function: linear;
            
            
            width: 100%;
            

            ${props => props.$hover && css`
                opacity: 1;
                cursor: pointer;
            `}


        `}
    }
`

