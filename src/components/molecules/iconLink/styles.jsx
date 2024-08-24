import styled from "styled-components";
import { Style as S } from '../../atoms'

export const Wrapper = styled.div`
    ${S.flex.row};
    ${S.gap.width(16)};
    display: flex;
    flex-direction: row;
    align-items: center;
`