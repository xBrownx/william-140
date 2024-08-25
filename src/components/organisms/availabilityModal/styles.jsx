import styled from "styled-components";
import { Style as S, Font as F, Colour as C } from '../../atoms'

export const Title = styled.h1`
    ${F.family.primaryLight};
    ${F.size(36)};
    ${C.font.neutral};
    font-weight: 300;
`

export const Tenancy = styled.div`
    width: auto;
    ${S.size.height(264)};
    ${S.size.minWidth(240)};
    svg {
        ${S.size.height(264)};
        ${S.size.minHeight(264)};
        width: 100%;
        height: 100%;
    }
`

export const TenancyDetails = styled.ul`
    list-style: none;
`