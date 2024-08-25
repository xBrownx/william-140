import styled from "styled-components";
import { Style as S } from '../../atoms'
export const Wrapper = styled.div`
    ${S.padding.__({top: 32})};
    ${S.flex.column};
    ${S.gap.height(4)};
    
    svg {
        ${S.size.width(136)};
        ${S.size.height(25)};
    }
`