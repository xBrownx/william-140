import styled from 'styled-components';
import { Style as S } from '../../atoms'
export const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #162425;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`

export const Wrapper = styled.div`
    position: relative;
    ${S.size.height(194)};
    ${S.size.width(523)};
`

export const StyledImage = styled.img`
    position: absolute;
    ${S.size.height(194)};
    transform: translate(0, -50%);
`

export const TextWrapper = styled.div`
    position: relative;
    transform: translate(-50%, -50%);
`