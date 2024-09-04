import styled from "styled-components";
import { Style as S } from '../../atoms'

export const Container = styled.div`
    ${S.size.height(90)};
    ${S.flex.centre};
    z-index: 5;
    position: fixed;
    top: 0;
    width: 100%;
`

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    ${S.padding.__({ left: 32 })};

    svg {
        min-height: 2.099vh;
        min-width: 19.097vw;

        &:hover {
            cursor: pointer;
        }
    }
`

export const NavigationWrapper = styled.div`
    ${S.padding.__({ right: 32 })};
`