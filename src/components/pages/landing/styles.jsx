import styled from "styled-components";
import { Style as S, Media as M } from '../../atoms'

export const StyledContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    min-width: 100vw;
    min-height: 100vh;
    

    ${S.flex.centre};
`

export const ArrowContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: ${S.width(32)};
    padding-bottom: ${S.height(41)};

    ${M.md`
        width: 64px;
        height: 64px;
        right: unset;
        bottom: 32px;
    `};
`