import styled, { css } from "styled-components";
import { Style as S, Font as F } from '../../atoms'
import { paddingBottom } from "../../atoms/globalStyles/DimensionCalcs";

export const Container = styled.div`
    width: 100%;
    ${S.size.height(810)};
    margin: 2% 0 0 0;
    background-color: black;
    position: relative;
`

export const ListWrapper = styled.div`
    flex: 1;
    ${S.padding.__({ top: 140, left: 32 })}
    z-index: 1000;
`

export const ButtonWrapper = styled.div`
    opacity: 1;
    transition: opacity 0.4s;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    height: fit-content;

    ${S.padding.__({ top: 140 })}
    ${props => props.$visible && css`
        opacity: 0;
    `}
    button {
        z-index: 1000;

        svg {
            ${S.size.height(24)};
            ${S.size.width(24)};
        }
    }
`
export const MapWrapper = styled.div`
    position: absolute;
    flex: 1;
    z-index: 10;
    display: flex;
    justify-content: end;
    right: 0;
    top: 0;
    ${S.padding.__({ top: 120, right: 32 })}
    img {
        ${S.size.width(175)};
        ${S.size.height(219)};
    }
`

export const VideoContainer = styled.div`
    transition: all 200ms;
    opacity: 1;
    width: 100%;
    height: 100%;
    position: absolute !important;
    z-index: 0;

    ${props => props.$isLoading && css`
        opacity: 0;
    `};

`

export const StyledVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: end;

    box-sizing: border-box;
`

export const MenuWrapper = styled.div`
    z-index: 10000;
    ${S.size.height(61)};
    ${S.padding.__({ bottom: 41, right: 74, left: 42 })};
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
`

export const StyledUl = styled.ul`

    margin: 0;
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ${S.gap.width(16)};


`;

export const StyledLi = styled.li`
    transition: all 200ms ease-in-out;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    ${S.size.height(29)};
    ${S.padding.inlineBlock({ inline: 8, block: 0 })};

    ${props => props.$border && css`
        border-right: 1px solid white;
    `}
    p {
        transition: all 200ms ease-in-out;
        color: white;
        opacity: 0.7;
        ${F.size(16)};
        font-weight: 300;

        ${F.family.secondaryLight};
        ${F.lineHeight(20.75)};
    }

    &:hover {
        cursor: pointer;

        p {
            opacity: 1;
        }
    }
    ${props => props.$active && css`
        p {
            opacity: 1;
        }
    `}
`;