import styled from "styled-components";
import {Style as S, Media as M } from '../../atoms'
export const Wrapper = styled.div`
    
`

export const CustomContainer = styled.div`
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    ${M.md`
        width: fit-content;
        height: 810px;
        min-width: 100vw;
        height: 810px;
        img {
        
        }
        overflow-x: scroll;
    `};
    
    
`