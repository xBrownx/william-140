import styled, {css} from "styled-components";
import {Style as S, Media as M} from '../../atoms'
import {pxToViewHeight, pxToViewWidth} from "../../atoms/globalStyles";

export const Wrapper = styled.div`
    z-index: 5;

    ${M.xxxxl`
                ${props => props.offset && css`
        transform: translateY(${props.offset + 4}%);
    `}
            `}
    ${M.xxxl`
        ${props => props.offset && css`
            transform: translateY(${props.offset}%);
        `}
    `}
    
    svg {
        opacity: 0;
        width: 100%;
        height: 100%;
        ${props => props.$active && css`
            transition: opacity 200ms;
            transition-timing-function: linear;
            mix-blend-mode: overlay;

            ${S.size.width(489)};

            ${props => props.$hover && css`
                opacity: 1;
                cursor: pointer;
            `}


        `}
    }
`

// ${props => props.height && css`
//     ${S.size.height(props.height)};
// `}


// ${M.xxxxl`
//     ${props => props.top && css`
//         ${S.margin.__({top: props.top + 1, left: props.left})}
//     `};
// `}
//
// ${M.xxxl`
//     ${props => props.top && css`
//         ${S.margin.__({top: props.top + 29.5, left: props.left - 2})}
//     `};
// `}

// margin-left: ${props => pxToViewWidth(props.left)}vw;
// margin-top: ${props => pxToViewHeight(props.top)}vh;