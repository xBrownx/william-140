import styled, {css} from "styled-components";
import {Style as S, Media as M } from '../../atoms'

export const ImageContainer = styled.div`
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
        height: 100%;
        x-overflow: scroll;
    `};
`

export const StyledImage = styled.img`
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
    
    img {
        ${S.borderRadius};
    };

    ${M.md`
        height: 100%;
        x-overflow: scroll;
    `};
`