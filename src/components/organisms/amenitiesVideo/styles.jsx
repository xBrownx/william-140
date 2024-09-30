import styled from "styled-components";
import { Style as S, Media as M } from '../../atoms';
export const Container = styled.div`
    ${S.borderRadius};
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    
    ${M.md`
        height: fit-content;
        flex-direction: column;
        padding-top: 32px;
        padding-bottom: 64px;
        gap: 32px;
        overflow: unset;
    `};
`

export const StyledVideo = styled.video`
    ${S.borderRadius};
    overflow: hidden;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    
    ${M.md`
        position: relative;
    `};
`