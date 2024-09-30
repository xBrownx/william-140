import styled, { css } from "styled-components";
import { Style as S, Font as F, Colour as C, Media as M } from '../../atoms';

export const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: ${S.height(32)};
    padding-block: ${S.height(192)};
    
    ${M.md`
        padding-block: 64px;
        x-overflow: scroll;
    `};
`;