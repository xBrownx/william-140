import styled, { css } from 'styled-components';
import { Media as M, Style as S } from "../../atoms";

export const CustomSplitScreen = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    
    padding-inline: ${S.width(160)};
    padding-block: ${S.height(72)};
    
    ${M.md`

        flex-direction: column;
        padding-top: 64px;
        padding-inline: 16px;
        padding-bottom: 32px;
        gap: 32px;
    `};
`;

export const Pane = styled.div`
    flex: 1;
    align-items: center;
    ${M.md`
        flex: none;
        width: 100%;
        ${props => props.id === 'left-pane' && css`
            order: 2;
        `};
        
        ${props => props.id === 'right-pane' && css`
            order: 1;
        `};
    `};
`

export const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: ${S.width(16)};
    
`