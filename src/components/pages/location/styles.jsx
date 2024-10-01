import styled, { css } from "styled-components";
import { Style as S, Font as F, Colour as C, Media as M } from '../../atoms';

export const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: ${S.height(32)};
    padding-top: ${S.height(192)};
    
    ${M.md`
        padding-block: 64px;
        overflow-x: scroll;
        padding-bottom: 0;
        width: fit-content;
    `};
`;