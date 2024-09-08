import styled from "styled-components";
import { Style as S } from '../../atoms';
export const Container = styled.div`
    ${S.borderRadius};
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
`

export const StyledVideo = styled.video`
    ${S.borderRadius};
    overflow: hidden;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`