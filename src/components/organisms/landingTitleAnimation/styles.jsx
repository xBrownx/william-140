import styled, { css } from "styled-components";
import { Style as S } from '../../atoms'
import { Media as M } from '../../atoms';
export const Container = styled.div`
    z-index: 3;
    position: absolute;
    display: flex;
    flex-direction: column;
    opacity: 1;
    min-width: 82.222vw;
    min-height: 51vh;
    bottom: 32px;
    left: 0;

    ${S.gap.height(32)};
    ${S.padding.__({ right: 32, bottom: 41, left: 32 })};


    ${props => props.$clone && css`
        z-index: 0;
        opacity: 1 !important;

        h1 {
            color: #162425 !important;
            opacity: 1 !important;
        }
    `} //


    ${M.md`
        gap: 0;
        margin: 0 0 160px 0;
        width: 100vw;
        min-width: 100vw;
        min-height: 0;
    `};
}
`


