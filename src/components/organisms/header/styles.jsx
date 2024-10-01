import styled from "styled-components";
import { Style as S, Media as M } from '../../atoms'

export const Container = styled.div`
    ${S.size.height(90)};
    ${S.flex.centre};
    ${S.padding.__({right: 32, left: 32})};
    z-index: 1;
    position: fixed;
    top: 0;
    width: 100%;

    ${M.md`
        height: 70px;
        padding-inline: 16px; 
    `};
`

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    z-index: 10;
    width: 100%;

    img {
        z-index: 10;
        min-height: 2.099vh;
        min-width: 19.097vw;

        ${M.md`
            width: 190px;
            height: 11px;
        `};

        &:hover {
            cursor: pointer;
        }
    }
`