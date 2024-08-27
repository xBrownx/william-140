import styled, {css} from "styled-components";
import {Style as S} from '../../atoms'

export const OuterContainer = styled.div`
    overflow: hidden;
    width: 100%;
        max-width: unset !important;
`

export const InnerContainer = styled.div`
    display: flex;
    width: max-content;
    max-width: unset !important;
`

export const Track = styled.div`
    display: flex;
    justify-content: center;
    width: max-content;
    max-width: unset !important;
    gap: 40px;
    &[data-animate="true"] {
        ${InnerContainer} {
            animation: slideAnimation 15s linear infinite;
        }
    }

    animation: none;

    @keyframes slideAnimation {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(-100%);
        }
    }

`

