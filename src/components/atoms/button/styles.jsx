import styled from "styled-components";
import {
    Style as S,
    Font as F,
    Colour as C,
    Media as M
} from "../globalStyles/";


export const StyledButton = styled.button`
    
    ${F.size._18px};
    ${F.family.secondaryRegular};
    ${S.borderRadius};
    ${S.margin.none};
    
    background: transparent;
    border-width: 1px;
    border-style: solid;
    padding: 0.5em 1.5em;
    overflow: hidden;
    position: relative;
    width: fit-content;
    z-index: 1;
    
    &:hover {
        cursor: pointer;
        color: #FFF;
    }
    
    &::after {
        content: "";
        background: #164A49;
        position: absolute;
        z-index: -1;
        padding: 0.5em 1.5em;
        display: block;
        transition: all 0.35s;
        left: 0;
        right: 0;
        top: -100%;
        bottom: 100%;
    }

    &:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.35s;
    }
    
`

