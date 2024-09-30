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

export const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    padding-left: ${S.width(16)};
    
`