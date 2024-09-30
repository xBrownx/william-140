import styled from "styled-components";
import { Style as S, Media as M } from '../../atoms'

export const Wrapper = styled.div`
    ${S.flex.row};
    ${S.gap.width(16)};
    display: flex;
    flex-direction: row;
    align-items: center;
    
    ${M.md`
        gap: 16px;
        
        p {
            font-size: 14px;
            line-height: 27px;
            weight: 400;
        }
    `};
`