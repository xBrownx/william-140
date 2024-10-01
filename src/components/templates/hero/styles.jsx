import styled from "styled-components";
import { Style as S, Media as M } from '../../atoms'
export const Container = styled.div`
    ${S.padding.inlineBlock({inline: 160, block: 90})};
    
    position: relative;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    
    ${M.md`
        padding-block: 32px;
        padding-inline: 16px;
        height: fit-content;
    `};
    
`