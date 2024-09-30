import styled, { css } from 'styled-components';
import { Style as S, Media as M } from '../../atoms'

export const Container = styled.div`
    width: fit-content;

    ${props => props.$row && css`
        ${S.flex.row};
    `};

    ${props => props.$column && css`
        ${S.flex.column}
    `};

    ${props => props.padding && css`
        ${S.padding.__(props.padding)};
    `}

    ${props => props.paddingInlineBlock && css`
        ${S.padding.inlineBlock(props.paddingInlineBlock)};
    `}

    ${M.md`
           display: flex;
           flex-direction: column;
           width: 100%;
           gap: 16px;
           padding-inline: 16px;
    `};
`

export const Wrapper = styled.div`
    ${props => props.$row && css`
        width: 75%;
        ${M.md`
           width: 100%;
           gap: 16px;
        `};
    `};
`