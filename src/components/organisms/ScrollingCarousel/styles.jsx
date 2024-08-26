import styled, {css} from "styled-components";
import {Style as S} from '../../atoms'

export const OuterContainer = styled.div`
    overflow: hidden;
    width: 100%;
    ${S.size.height(300)};
`

export const InnerContainer = styled.div`
    display: flex;
    width: max-content;
   
`

export const Track = styled.div`
    display: flex;
    justify-content: center;
    width: fit-content;
    gap: 16px;
    
    
    &[data-animate="true"] {
        ${InnerContainer} {
            animation: slideAnimation 8s linear infinite;
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

