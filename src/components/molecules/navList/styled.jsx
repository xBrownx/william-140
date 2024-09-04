import styled from "styled-components";
import {
    Colour as C,
    Style as S,
    Media as M
} from '../../atoms'

export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    ${S.gap.width(32)};

    ${M.md`
        display: none  
    `};
    
    
`