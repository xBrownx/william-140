import styled from "styled-components";
import { Style as S } from '../../atoms'
export const Container = styled.div`
    width: 100%;
    ${S.size.height(810)};
    margin: 2% 0 0 0;
    background-color: darkgray;
`

export const ListWrapper = styled.div`
    flex: 1;
    ${S.padding.__({top: 48, left: 32})}
`

export const ButtonWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    height: fit-content;
    ${S.padding.__({top: 48})}
    
    button {
        svg {
            ${S.size.height(24)};
            ${S.size.width(24)};
        }
    } 
`

export const MapWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
    
    ${S.padding.__({top: 48, right: 32})}
    svg {
        ${S.size.width(175)};
        ${S.size.height(219)};
    }
`