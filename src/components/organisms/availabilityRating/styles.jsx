import styled from "styled-components";
import { Style as S } from '../../atoms'
export const Wrapper = styled.div`
    ${S.padding.__({top: 32})};
    ${S.flex.column};
    ${S.gap.height(4)};
    
    img {
        height: 25px;
        ${S.size.height(19)};
        justify-content: start;
        align-items: start;
        object-fit: cover;
        padding: 0;
    }
`