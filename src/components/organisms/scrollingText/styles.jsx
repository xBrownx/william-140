import styled from "styled-components";

import { Style as S, Font as F } from '../../atoms'
export const Container = styled.div`
    background: var(--color-primary-2);
    ${S.size.height(500)};
    ${S.size.minHeight(500)};
    display: flex;
    justify-content: center;
    overflow: hidden;
    min-width: 100vw;
    width: 100vw;

`


export const Heading = styled.h1`
    ${F.family.primaryLight};
    ${F.size(300)};
    ${F.lineHeight(300)};
    color: var(--color-primary-4);
    font-weight: 300;
    opacity: 0.2;
    padding: 0;
    margin: 0;
`
