import styled from "styled-components";
import {
    Colour as C,
    Style as S,
    Media as M
} from '../../atoms'

export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    ${S.gap.width._32px}
    
    ${M.md`
        display: none  
    `};
`