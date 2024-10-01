import styled from "styled-components";
import {
    Style as S,
    Font as F,
    Colour as C,
    Media as M
} from "../globalStyles/";

export const StyledTextArea = styled.textarea`
    ${S.size.height(109)};
    ${F.size(18)};
    ${F.family.secondaryLight};
    width: 100%;
    background-color: transparent;
    color: white;
    box-sizing: border-box;
    border: 1px solid #E6E6E6;
    padding: 15px 0 0 20px;
    
    resize: none;
    
    &::placeholder {
        color: white;
    }
    
    opacity: 0.7;
    ${M.md`
        height: 109px;
        font-size: 14px;
        line-height: 18.86px;
    `};
    
`