import styled, { css } from "styled-components";
import { Style as S } from '../../atoms'

export const Wrapper = styled.div`

    svg {
        opacity: 0;
        ${S.size.width(489)};
        ${S.size.height(90)};
        
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