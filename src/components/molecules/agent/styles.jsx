import styled, { css } from "styled-components";
import { Style as S, Font as F, Media as M } from '../../atoms'

export const Wrapper = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    ${M.md`
        gap: 8px;
    `};
`


export const Name = styled.h1`
    ${S.padding.none};
    ${S.margin.none};
    ${F.family.primaryRegular}
    color: white;
    font-weight: 400;
    ${M.md`
            font-size: 14px;
            line-height: 18.16px;
            font-weight: 700;
        `};
`

export const Phone = styled.p`
    ${S.margin.none};
    ${S.padding.__({ top: 8 })};
    ${F.size(14)};
    ${F.family.secondaryLight};
    font-weight: 400;
    color: white;
    opacity: 0.7;

    ${M.md`
            font-size: 12px;
            line-height: 15.56px;
            font-weight: 400;
        `};
`


export const CustomImageContainer = styled.div`
    ${props => props.width && css`
        ${S.size.width(props.width)}
        ${S.size.minWidth(props.width)}
        ${S.size.maxWidth(props.width)}
    `}

    ${props => props.height && css`
        ${S.size.height(props.height)}
        ${S.size.maxHeight(props.height)}
        ${S.size.minHeight(props.height)}
    `}

    ${S.borderRadius};

    ${M.md`
        width: 64px !important;
        max-width: 64px;
        min-width: 64px;
        
        height: 64px !important;
        max-height: 64px;
        min-height: 64px;
    `};
`

export const StyledImg = styled.img`
    ${S.borderRadius};
    width: 100%;
    height: 100%;

`
