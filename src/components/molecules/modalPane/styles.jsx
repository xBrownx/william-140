import styled, {css} from "styled-components";
import { Style as S } from '../../atoms'
export const Container = styled.div`

`

export const BackgroundOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.0);
    z-index: 1000;
    display: none;
    ${props => props.$open && css`
        display: block;
    `};
`

export const ModalWindow = styled.div`
    ${S.flex.column};
    ${S.borderRadius};
    ${S.size.width(796)};
    ${S.size.height(516)};
    position: fixed;
    z-index: 1000;
    top: 50%;
    left: 50%;
    
    height: 70.988vh;
    transform: translate(-50%, -50%);
    overflow: hidden;
    box-sizing: border-box;
    pointer-events: none;
    transition: opacity 500ms ease-in-out;
    
    background: rgba(22, 74, 73, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(5px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);

    opacity: 0;
    
    ${props => props.$open && css`
        opacity: 1;
        pointer-events: visible;
    `};
`

export const CloseButtonWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 2.963vh 1.667vw;

    &:hover {
        cursor: pointer;
    }
`