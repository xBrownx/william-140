import styled, { css } from "styled-components";
import { Style as S } from '../../atoms'
import {pxToViewHeight, pxToViewWidth} from "../../atoms/globalStyles";

export const Wrapper = styled.div`
    position: absolute;
    margin-left: ${props => pxToViewWidth(props.left)}vw;
    margin-top: ${props => pxToViewHeight(props.top)}vh;
    
    svg {
        opacity: 0;
        ${S.size.width(489)};
        ${props => props.height && css`
            ${S.size.height(props.height)};
        `}
        
        
        
        
        ${props => props.$active && css`
            transition: opacity 200ms;
            transition-timing-function: linear;
            mix-blend-mode: overlay;
            
            ${props => props.$isHover && css`
                opacity: 1;
                cursor: pointer;
            `}
        `}
    }
`

// ${props => props.width && css`
//              ${S.size.width(489)};
//         `}