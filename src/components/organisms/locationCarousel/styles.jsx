import styled from "styled-components";
import {Style as S, Media as M } from '../../atoms'
export const Wrapper = styled.div`
    ${M.md`
        width: fit-content;
        overflow: auto;
    `};
`

export const CustomContainer = styled.div`
    position: relative;
    
    ${M.md`
        width: fit-content;
        height: 810px;
        min-width: 100vw;
        height: 810px;
        overflow: auto;
    `};
    
    
`

export const SwipeContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.4);
`