import styled, { css } from "styled-components";
import { Style as S } from '../../atoms'

export const AnimatedLink = styled.div`
    transition: all 200ms ease;
    width: fit-content;

    &:hover {
        ${S.padding.__({ left: 32 })};
        cursor: pointer;

        p {
            opacity: 1;
        }
    }

    ${props => props.$active && css`
        ${S.padding.__({ left: 32 })};

        p {
            opacity: 1;
        }
    `}

`